import { UUID, randomUUID } from 'crypto';
import { UbicacionAbstract } from '../abstracts/ubicacion.abstract';

export class Ubicacion extends UbicacionAbstract {
  nombre: string;
  descripcion: string;
  id: UUID;

  constructor(nombre: string, descripcion: string) {
    super();
    this.id = randomUUID();
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}
