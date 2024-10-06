import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from "./user.state";
import { userFeatureKey } from "./user.reducers";

export const userFeatureSelector = createFeatureSelector<IUserState>(userFeatureKey);

export const selectGetUserByEmail = createSelector(userFeatureSelector, (state: IUserState) => state.user);
export const selectGetUserByEmailLoading = createSelector(userFeatureSelector, (state: IUserState) => state.isLoading);
export const selectGetUserByEmailError = createSelector(userFeatureSelector, (state: IUserState) => state.error);