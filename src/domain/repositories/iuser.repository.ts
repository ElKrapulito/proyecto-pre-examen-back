import { IRepository } from '../../../app-core/src/core/iRepository';
import { User } from '../models/implementations/user.model';

export interface IUserRepository extends IRepository<User> {
  findByEmail(email: string): Promise<User>;
}
export const IUserRepository = Symbol('IUserRepository');
