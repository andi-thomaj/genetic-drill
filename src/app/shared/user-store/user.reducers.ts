import { UserResponseModel } from './models/responses/user-response-model';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IUserState } from './user.state';
import { createFeature, createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: '',
};

const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,
    on(userActions.getUserByEmailStart, (state) => {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }),
    on(userActions.getUserByEmailFinished, (state, action) => {
      return {
        ...state,
        user: action.result,
        isLoading: false,
        error: '',
      };
    }),
    on(userActions.getUserByEmailFailed, (state, action) => {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    })
  ),
});

export const { name: userFeatureKey, reducer: userReducer } = userFeature;
