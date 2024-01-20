import { UUID } from 'crypto';
import { ActivoAbstract } from '../abstracts/activo.abstract';
import { MantenimientoAbstract } from '../abstracts/mantenimiento.abstract';

export class Mantenimiento extends MantenimientoAbstract {
  tipoMantenimiento: string;
  fechaProgramacion: Date;
  fechaEjecucion: Date;
  costo: number;
  estado: boolean;
  activo: ActivoAbstract;
  id: UUID;
  constructor(
    tipoMantenimiento: string,
    fechaProgramacion: Date,
    fechaEjecucion: Date,
    costo: number,
    estado: boolean,
    activo: ActivoAbstract,
  ) {
    super();
    this.tipoMantenimiento = tipoMantenimiento;
    this.fechaProgramacion = fechaProgramacion;
    this.fechaEjecucion = fechaEjecucion;
    this.costo = costo;
    this.estado = estado;
    this.activo = activo;
  }
}
