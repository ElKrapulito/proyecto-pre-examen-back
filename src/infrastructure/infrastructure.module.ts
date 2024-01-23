import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './typeorm/config/user.entity';
import { ActivoEntity } from './typeorm/config/activo.entity';
import { InventarioEntity } from './typeorm/config/inventario.entity';
import { MantenimientoEntity } from './typeorm/config/mantenimiento';
import { RepositoryProvider } from './typeorm/repositories';
import { UbicacionEntity } from './typeorm/config/ubicacion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ActivoEntity,
      InventarioEntity,
      MantenimientoEntity,
      UbicacionEntity,
    ]),
  ],
  providers: [...RepositoryProvider],
  exports: [...RepositoryProvider],
})
export class InfrastructureModule {}
