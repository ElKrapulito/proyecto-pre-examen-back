import { UserEntity } from '../config/user.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserRepository } from '../../../domain/repositories/iuser.repository';
import { UserAbstract } from '../../../domain/models/abstracts/user.abstract';

export class UserRepository
  extends BaseRepositoryTypeOrm<UserEntity>
  implements IUserRepository
{
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {
    super(userRepo);
  }
  findByEmail(email: string): Promise<UserAbstract> {
    return this.userRepo.findOne({ where: { email } });
  }
}
