import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPostComponent } from './display-post.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [DisplayPostComponent],
  imports: [CommonModule, PdfViewerModule],
  exports: [DisplayPostComponent]
})
export class DisplayPostModule {}
