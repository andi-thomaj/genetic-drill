import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from "../../services/api/user.service";
import * as userActions from './user.actions';
import { selectGetUserByEmail } from "./user.selectors";
import { Injectable } from "@angular/core";
import { mergeMap } from "rxjs";

// @Injectable()
// export class UserEffects {
//     constructor(private actions$: Actions, private userService: UserService, private store: Store){}

//     public getUserByEmailEffect$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(userActions.getUserByEmailStart),
//             concatLatestFrom(() => this.store.select(selectGetUserByEmail)),
//             mergeMap(([, email]) => this.userService.getUserByEmail(email).pipe(
//                 map((result) => {

//                 })
//             ))
//         )
//     )
// }