import { Inventario } from '../../models/implementations/inventario.model';
import { ActivoAbstract } from '../../models/abstracts/activo.abstract';
export interface IInventarioFactory {
  createInventario(
    fechaInventario: Date,
    ubicacion: string,
    activo: ActivoAbstract,
  ): Inventario;
}

export const IInventarioFactory = Symbol('IInventarioFactory');
