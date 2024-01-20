import { UUID } from 'crypto';
import { ActivoAbstract } from '../abstracts/activo.abstract';
import { InventarioAbstract } from '../abstracts/inventario.abstract';

export class Inventario extends InventarioAbstract {
  fechaInventario: Date;
  ubicacion: string;
  activo: ActivoAbstract;
  id: UUID;

  constructor(
    fechaInventario: Date,
    ubicacion: string,
    activo: ActivoAbstract,
  ) {
    super();
    this.fechaInventario = fechaInventario;
    this.ubicacion = ubicacion;
    this.activo = activo;
  }
}
