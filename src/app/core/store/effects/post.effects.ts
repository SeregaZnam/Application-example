import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '../state/app.state';
import { PostService } from '../../services/post.service';
import { Store } from '@ngrx/store';
import { GetPosts, GetPostsSuccess, PostActionsType } from '../actions/post.actions';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Post } from '../../models';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(
    private readonly postService: PostService,
    private readonly actions$: Actions,
    private readonly store: Store<AppState>
  ) {}

  @Effect()
  getPosts$ = this.actions$.pipe(
    ofType<GetPosts>(PostActionsType.GetPosts),
    map((action) => action.payload),
    mergeMap(({ start, limit }) => this.postService.getPosts(start, limit)),
    switchMap((posts: Post[]) => of(new GetPostsSuccess(posts)))
  );
}
