import { InventarioEntity } from '../config/inventario.entity';
import { BaseRepositoryTypeOrm } from './base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IInventarioRepository } from '../../../domain/repositories/iinventario.repository';

@Injectable()
export class InventarioRepository
  extends BaseRepositoryTypeOrm<InventarioEntity>
  implements IInventarioRepository
{
  constructor(
    @InjectRepository(InventarioEntity)
    private inventarioRepo: Repository<InventarioEntity>,
  ) {
    super(inventarioRepo);
  }
}
