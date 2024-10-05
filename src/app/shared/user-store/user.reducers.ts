import { UserResponseModel } from './models/responses/user-response-model';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IUserState } from './user.state';
import { createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';

export const userEntityAdapter: EntityAdapter<UserResponseModel> =
  createEntityAdapter<UserResponseModel>();

const initialState = userEntityAdapter.getInitialState({
  user: null,
}) as IUserState;

export const userReducer = createReducer<IUserState>(
  initialState,
  on(userActions.getUserByEmailStart, (state) => {
    return {
      ...state,
      error: '',
      loading: true,
    };
  }),
  on(userActions.getUserByEmailFinished, (state, action) => {
    return userEntityAdapter.setOne(action.result, {
      
    });
  })
);
