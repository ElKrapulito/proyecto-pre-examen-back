import { AggregateRoot } from '../../../../app-core/src/core/aggregateRoot';
import { ActivoAbstract } from './activo.abstract';
export abstract class MantenimientoAbstract extends AggregateRoot {
  abstract tipoMantenimiento: string;
  abstract fechaProgramacion: Date;
  abstract fechaEjecucion: Date;
  abstract costo: number;
  abstract estado: boolean;
  abstract activo: ActivoAbstract;
}
