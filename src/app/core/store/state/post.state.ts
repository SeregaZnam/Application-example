import { Post } from '../../models';

export interface PostState {
  posts: Post[];
}

export const initialPostState: PostState = {
  posts: []
};
