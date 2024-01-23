import { Provider } from '@nestjs/common';
import { IUserRepository } from '../../../domain/repositories/iuser.repository';
import { UserRepository } from './user.repository';
import { IActivoRepository } from '../../../domain/repositories/iactivo.repository';
import { ActivoRepository } from './activo.repository';
import { IMantenimientoRepository } from '../../../domain/repositories/imantenimiento.repository';
import { MantenimientoRepository } from './mantenimiento.repository';
import { IInventarioRepository } from '../../../domain/repositories/iinventario.repository';
import { InventarioRepository } from './inventario.repository';

export const RepositoryProvider: Provider[] = [
  { provide: IUserRepository, useClass: UserRepository },
  { provide: IActivoRepository, useClass: ActivoRepository },
  { provide: IMantenimientoRepository, useClass: MantenimientoRepository },
  { provide: IInventarioRepository, useClass: InventarioRepository },
];
