import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FileReaderService } from '../core/services/file-reader.service';
import { Observable, of } from 'rxjs';
import { PdfFileType } from '../core/models';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayPostComponent implements OnInit {
  pdfSrc$: Observable<PdfFileType> = of('');

  constructor(private readonly fileReaderService: FileReaderService) {}

  ngOnInit(): void {}

  onFileSelected(event: any): any {
    const [file] = event.target.files;

    this.pdfSrc$ = this.fileReaderService.readFile(file) as Observable<PdfFileType>;
  }
}
