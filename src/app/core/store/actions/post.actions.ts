import { Action } from '@ngrx/store';
import { Post } from '../../models';

export enum PostActionsType {
  GetPosts = '[Post] Get Posts',
  GetPostsSuccess = '[Post] Get Posts Success',
  GetPost = '[Post] Get Post',
  GetPostSuccess = '[Post] Get Post Success'
}

export class GetPosts implements Action {
  public readonly type = PostActionsType.GetPosts;
  constructor(
    public readonly payload: {
      start: number;
      limit: number;
    }
  ) {}
}

export class GetPostsSuccess implements Action {
  public readonly type = PostActionsType.GetPostsSuccess;
  constructor(public readonly payload: Post[]) {}
}

export class GetPost implements Action {
  public readonly type = PostActionsType.GetPost;
}

export class GetPostSuccess implements Action {
  public readonly type = PostActionsType.GetPostSuccess;
  constructor(public readonly payload: Post[]) {}
}

export type PostActions = GetPosts | GetPostsSuccess | GetPost | GetPostSuccess;
