import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { UserService } from "../../services/api/user.service";
import * as userActions from './user.actions';

export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService, private store: Store){}

    public getUserByEmailEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.getUserByEmailStart),
            concatLatestFrom(() => this.store.select())
        )
    )
}