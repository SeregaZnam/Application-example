import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Post} from '../core/models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  activePost: Post;

  constructor() {}

  ngOnInit(): void {}

  onClickPost(post: Post): void {
    this.activePost = post;
  }
}
