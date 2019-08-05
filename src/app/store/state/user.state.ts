import { IUser } from '../../models/user.interface';

// model interface
export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

// initial state
export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
};
