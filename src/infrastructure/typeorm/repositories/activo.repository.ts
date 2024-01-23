import { InjectRepository } from '@nestjs/typeorm';
import { ActivoEntity } from '../config/activo.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IActivoRepository } from '../../../domain/repositories/iactivo.repository';

@Injectable()
export class ActivoRepository
  extends BaseRepositoryTypeOrm<ActivoEntity>
  implements IActivoRepository
{
  constructor(
    @InjectRepository(ActivoRepository)
    private activoRepository: Repository<ActivoEntity>,
  ) {
    super(activoRepository);
  }
}
