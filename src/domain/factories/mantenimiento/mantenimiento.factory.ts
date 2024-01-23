import { ActivoAbstract } from 'src/domain/models/abstracts/activo.abstract';
import { Mantenimiento } from 'src/domain/models/implementations/mantenimiento.model';
import { IMantenimientoFactory } from './imantenimiento.factory';
import { UUID } from 'crypto';

export class MantenimientoFactory implements IMantenimientoFactory {
  createMantenimiento(
    tipoMantenimiento: string,
    fechaProgramacion: Date,
    fechaEjecucion: Date,
    costo: number,
    estado: boolean,
    activo: ActivoAbstract | UUID,
  ): Mantenimiento {
    return new Mantenimiento(
      tipoMantenimiento,
      fechaProgramacion,
      fechaEjecucion,
      costo,
      estado,
      activo,
    );
  }
}
