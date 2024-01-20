import { Provider } from '@nestjs/common';
import { IUserFactory } from './user/iuser.factory';
import { UserFactory } from './user/user.factory';
import { IActivoFactory } from './activo/iactivo.factory';
import { ActivoFactory } from './activo/activo.factory';
import { IInventarioFactory } from './inventario/iinventario.factory';
import { InventarioFactory } from './inventario/inventario.factory';
import { IMantenimientoFactory } from './mantenimiento/imantenimiento.factory';
import { MantenimientoFactory } from './mantenimiento/mantenimiento.factory';

export const FactoriesProvider: Provider[] = [
  { provide: IUserFactory, useClass: UserFactory },
  { provide: IActivoFactory, useClass: ActivoFactory },
  { provide: IInventarioFactory, useClass: InventarioFactory },
  { provide: IMantenimientoFactory, useClass: MantenimientoFactory },
];
