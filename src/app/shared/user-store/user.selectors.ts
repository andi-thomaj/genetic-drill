import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState, userFeatureName } from "./user.state";
import { userSelectors } from "./user.reducers";

export const userFeatureSelector = createFeatureSelector<IUserState>(userFeatureName);

export const selectGetUserByEmail = createSelector(userFeatureSelector, userSelectors.selectAll);