import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {routerReducer} from '@ngrx/router-store';
import {postReducers} from './post.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  posts: postReducers
};
