import { User } from '../../models/implementations/user.model';

export interface IUserFactory {
  createUser(
    name: string,
    email: string,
    password: string,
    dateOfBirth: Date,
  ): User;
}

export const IUserFactory = Symbol('IUserFactory');
