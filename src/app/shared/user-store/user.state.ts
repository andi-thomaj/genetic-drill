import { UserResponseModel } from './models/responses/user-response-model';

export interface IUserState {
  user: UserResponseModel | null;
  isLoading: boolean;
  error: string;
}
