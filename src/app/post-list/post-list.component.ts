import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Post } from '../core/models';
import { select, Store } from '@ngrx/store';
import { selectPostList } from '../core/store/selectors/post.selectors';
import { GetPosts } from '../core/store/actions/post.actions';
import { WINDOW } from '../core/services';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild('scrollBlock') scrollBlock: ElementRef;
  @Output() clickPost: EventEmitter<any> = new EventEmitter<any>();

  posts: Post[] = [];
  posts$: Observable<Post[]> = this.store.pipe(select(selectPostList));

  private start = 0;
  private limit = 30;

  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(WINDOW) private readonly window: Window,
    private readonly store: Store,
    private readonly cdf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.posts$
      .pipe(
        filter((posts) => Array.isArray(posts)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((posts: Post[]) => {
        if (posts.length !== 0) {
          this.posts.push(...posts);
          this.start = 30;
          this.limit = 10;
          this.cdf.detectChanges();
        }
      });

    this.store.dispatch(
      new GetPosts({
        start: this.start,
        limit: this.limit
      })
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  @HostListener('window:scroll', ['$event']) private onScroll(): void {
    const contentHeight = this.scrollBlock.nativeElement.scrollHeight;
    const scrollHeight = this.window.pageYOffset + this.window.innerHeight;

    if (scrollHeight >= contentHeight) {
      this.store.dispatch(
        new GetPosts({
          start: this.start,
          limit: this.limit
        })
      );
      this.posts$.subscribe((posts: Post[]) => {
        if (posts.length !== 0) {
          this.start += 10;
        }
      });
    }
  }

  onClickPost(post: Post): void {
    this.clickPost.emit(post);
  }
}
