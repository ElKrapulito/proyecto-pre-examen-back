import { UbicacionEntity } from '../config/ubicacion.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { IUbicacionRepository } from '../../../domain/repositories/iubicacion.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UbicacionRepository
  extends BaseRepositoryTypeOrm<UbicacionEntity>
  implements IUbicacionRepository
{
  constructor(
    @InjectRepository(UbicacionEntity)
    private ubicacionRepo: Repository<UbicacionEntity>,
  ) {
    super(ubicacionRepo);
  }
}
