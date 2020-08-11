import {RouterReducerState} from '@ngrx/router-store';
import {initialPostState, PostState} from './post.state';

export interface AppState {
  router?: RouterReducerState;
  posts: PostState;
}

export const initialAppState: AppState = {
  posts: initialPostState
};
