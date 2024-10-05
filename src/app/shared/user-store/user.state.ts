import { UserResponseModel } from "./models/responses/user-response-model";

export const userFeatureName = 'user';

export interface IUserState {
    user: UserResponseModel | null;
}