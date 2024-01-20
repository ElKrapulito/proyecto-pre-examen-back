import { ActivoAbstract } from 'src/domain/models/abstracts/activo.abstract';
import { Inventario } from 'src/domain/models/implementations/inventario.model';
import { IInventarioFactory } from './iinventario.factory';

export class InventarioFactory implements IInventarioFactory {
  createInventario(
    fechaInventario: Date,
    ubicacion: string,
    activo: ActivoAbstract,
  ): Inventario {
    return new Inventario(fechaInventario, ubicacion, activo);
  }
}
