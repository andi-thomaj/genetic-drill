import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/api/user.service';
import { selectGetUserByEmail } from './user.selectors';
import { inject, Injectable } from '@angular/core';
import { catchError, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { UserResponseModel } from './models/responses/user-response-model';
import { userActions } from './user.actions';

export const userEffect = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(userActions.getUserByEmail),
      switchMap(({ email }) => {
        console.log(email);
        return userService.getUserByEmail(email).pipe(
          map((result: UserResponseModel) => {
            return userActions.getUserByEmailSuccess({ result });
          }),
          catchError(() => {
            return of(userActions.getUserByEmailFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
