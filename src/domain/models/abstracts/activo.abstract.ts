import { AggregateRoot } from '../../../../app-core/src/core/aggregateRoot';

export abstract class ActivoAbstract extends AggregateRoot {
  abstract nombre: string;
  abstract descripcion: string;
  abstract fechaAdquisicion: Date;
  abstract valorCompra: number;
  abstract valorLibro: number;
  abstract valorMercado: number;
  abstract estado: string;
}
