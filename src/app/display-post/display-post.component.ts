import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FileReaderService } from '../core/services/file-reader.service';
import { Observable, of } from 'rxjs';
import { PdfFileType, Post } from '../core/models';
import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPostComponent implements OnInit {
  @Input() post: Post;

  pdfSrc$: Observable<PdfFileType> = of('');

  constructor(private readonly fileReaderService: FileReaderService) {}

  ngOnInit(): void {}

  onFileSelected(event: any): any {
    const [file] = event.target.files;

    this.pdfSrc$ = this.fileReaderService.readFile(file) as Observable<PdfFileType>;
  }

  getFile() {
    this.pdfSrc$ = fromFetch('http://localhost:4200/api/file').pipe(
      switchMap((res: Response) => {
        if (res.ok) {
          return res.blob();
        }
      }),
      switchMap((d) => this.fileReaderService.readFile(d))
    ) as Observable<PdfFileType>;
  }
}
