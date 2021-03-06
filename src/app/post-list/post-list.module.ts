import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { PostModule } from '../post';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, PostModule],
  exports: [PostListComponent]
})
export class PostListModule {}
