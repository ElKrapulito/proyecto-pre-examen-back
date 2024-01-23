import { MantenimientoEntity } from '../config/mantenimiento';
import { BaseRepositoryTypeOrm } from './base.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IMantenimientoRepository } from '../../../domain/repositories/imantenimiento.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MantenimientoRepository
  extends BaseRepositoryTypeOrm<MantenimientoEntity>
  implements IMantenimientoRepository
{
  constructor(
    @InjectRepository(MantenimientoEntity)
    private mantenimientoRepo: Repository<MantenimientoEntity>,
  ) {
    super(mantenimientoRepo);
  }
}
