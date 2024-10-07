import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { UserResponseModel } from './models/responses/user-response-model';

// export const getUserByEmailStart = createAction(
//   getActionType('start getUserByEmail')
// );
// export const getUserByEmailFinished = createAction(
//   getActionType('finished getUserByEmail'),
//   props<{ result: UserResponseModel }>()
// );
// export const getUserByEmailFailed = createAction(
//   getActionType('failed getUserByEmail'),
//   props<{ error: string }>()
// );

// function getActionType(action: string): string {
//   return `[User] ${action}`;
// }

export const userActions = createActionGroup({
  source: 'user',
  events: {
    getUserByEmail: props<{ email: string }>(),
    'getUserByEmail success': props<{ result: UserResponseModel }>(),
    'getUserByEmail failure': emptyProps(),
  },
});
