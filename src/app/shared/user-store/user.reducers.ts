import { IUserState } from './user.state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: '',
};

const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,
    on(userActions.getUserByEmail, (state) => {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }),
    on(userActions.getUserByEmailSuccess, (state, action) => {
      return {
        ...state,
        user: action.result,
        isLoading: false,
        error: '',
      };
    }),
    on(userActions.getUserByEmailFailure, (state, action) => {
      return {
        ...state,
        error: '',
        isLoading: false,
      };
    })
  ),
});

export const { name: userFeatureKey, reducer: userReducer } = userFeature;
