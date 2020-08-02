import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { Post } from '../core/models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild('scrollBlock') scrollBlock: ElementRef;

  items: Post[];

  private start = 0;
  private limit = 70;

  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly cdf: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTodos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((todos: Post[]) => {
        this.items = todos;
        this.limit = 10;
        this.cdf.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    const [_, window] = ($event as any).path;
    const contentHeight = this.scrollBlock.nativeElement.offsetHeight;
    const scrollHeight = window.pageYOffset + window.innerHeight;

    if (scrollHeight >= contentHeight) {
      this.start += 10;
      this.getTodos()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res) => {
          this.items.push(...res);
          this.cdf.detectChanges();
        });
    }
  }

  private getTodos(): Observable<Post[]> {
    return fromFetch(
      `https://jsonplaceholder.typicode.com/todos?_start=${this.start}&_limit=${this.limit}`
    ).pipe(
      switchMap((res: Response) => {
        if (res.ok) {
          return res.json();
        }
      })
    );
  }
}
