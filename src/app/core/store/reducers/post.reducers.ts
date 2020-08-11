import { PostActions, PostActionsType } from '../actions/post.actions';
import { initialPostState, PostState } from '../state/post.state';

export const postReducers = (state = initialPostState, action: PostActions): PostState => {
  switch (action.type) {
    case PostActionsType.GetPostsSuccess: {
      return {
        ...state,
        posts: action.payload
      };
    }
    case PostActionsType.GetPostSuccess: {
      return {
        ...state,
        posts: action.payload
      };
    }

    default:
      return state;
  }
};
