import { UbicacionController } from './ubicacion/ubicacion.controller';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApplicationModule } from '../application/application.module';
import { ActivoController } from './activo/activo.controller';
import { MantenimientoController } from './mantenimiento/mantenimiento.controller';

@Module({
  imports: [CqrsModule, ApplicationModule],
  controllers: [ActivoController, MantenimientoController, UbicacionController],
})
export class ApiModule {}
