import { PostState } from '../state/post.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';

export const selectPosts = (state: AppState) => state.posts;

export const selectPostList = createSelector(
  selectPosts,
  (state: PostState) => state.posts
);
