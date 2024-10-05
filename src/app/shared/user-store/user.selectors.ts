import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState, userFeatureName } from "./user.state";

export const userFeatureSelector = createFeatureSelector<IUserState>(userFeatureName);

export const selectGetUserByEmail = createSelector(userFeatureSelector, )