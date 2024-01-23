import { AggregateRoot } from '../../../../app-core/src/core/aggregateRoot';
export abstract class UbicacionAbstract extends AggregateRoot {
  abstract nombre: string;
  abstract descripcion: string;
}
