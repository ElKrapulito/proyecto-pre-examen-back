import { Mantenimiento } from '../../models/implementations/mantenimiento.model';
import { ActivoAbstract } from '../../models/abstracts/activo.abstract';
import { UUID } from 'crypto';
export interface IMantenimientoFactory {
  createMantenimiento(
    tipoMantenimiento: string,
    fechaProgramacion: Date,
    fechaEjecucion: Date,
    costo: number,
    estado: boolean,
    activo: ActivoAbstract | UUID,
  ): Mantenimiento;
}

export const IMantenimientoFactory = Symbol('IMantenimientoFactory');
