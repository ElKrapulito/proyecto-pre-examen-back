import { AggregateRoot } from '../../../../app-core/src/core/aggregateRoot';
import { ActivoAbstract } from './activo.abstract';
export abstract class InventarioAbstract extends AggregateRoot {
  abstract fechaInventario: Date;
  abstract ubicacion: string;
  abstract activo: ActivoAbstract;
}
