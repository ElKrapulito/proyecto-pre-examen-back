import { UUID } from 'crypto';
import { AggregateRoot } from '../../../../app-core/src/core/aggregateRoot';
import { UbicacionAbstract } from './ubicacion.abstract';

export abstract class ActivoAbstract extends AggregateRoot {
  abstract nombre: string;
  abstract descripcion: string;
  abstract fechaAdquisicion: Date;
  abstract valorCompra: number;
  abstract valorLibro: number;
  abstract valorMercado: number;
  abstract estado: string;
  abstract ubicacion: UbicacionAbstract | UUID;
}
