import { Mantenimiento } from '../../models/implementations/mantenimiento.model';
import { ActivoAbstract } from '../../models/abstracts/activo.abstract';
export interface IMantenimientoFactory {
  createMantenimiento(
    tipoMantenimiento: string,
    fechaProgramacion: Date,
    fechaEjecucion: Date,
    costo: number,
    estado: boolean,
    activo: ActivoAbstract,
  ): Mantenimiento;
}

export const IMantenimientoFactory = Symbol('IMantenimientoFactory');
