import { IUserFactory } from './iuser.factory';
import { User } from '../../models/implementations/user.model';

export class UserFactory implements IUserFactory {
  createUser(
    name: string,
    email: string,
    password: string,
    dateOfBirth: Date,
  ): User {
    return new User(name, email, password, dateOfBirth);
  }
}
