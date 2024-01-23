import { UUID } from 'crypto';
import { UserAbstract } from '../../../domain/models/abstracts/user.abstract';
import { PrimaryColumn, Column } from 'typeorm';
export class UserEntity extends UserAbstract {
  @PrimaryColumn()
  id: UUID;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  dateOfBirth: Date;
}
