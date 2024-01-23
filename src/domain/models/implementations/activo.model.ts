import { UUID, randomUUID } from 'crypto';
import { ActivoAbstract } from '../abstracts/activo.abstract';
import { UbicacionAbstract } from '../abstracts/ubicacion.abstract';

export class Activo extends ActivoAbstract {
  nombre: string;
  descripcion: string;
  fechaAdquisicion: Date;
  valorCompra: number;
  valorLibro: number;
  valorMercado: number;
  estado: string;
  ubicacion: UbicacionAbstract | UUID;
  id: UUID;

  constructor(
    nombre: string,
    descripcion: string,
    fechaAdquisicion: Date,
    valorCompra: number,
    valorLibro: number,
    valorMercado: number,
    estado: string,
    ubicacion: UbicacionAbstract | UUID,
  ) {
    super();
    this.id = randomUUID();
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaAdquisicion = fechaAdquisicion;
    this.valorCompra = valorCompra;
    this.valorLibro = valorLibro;
    this.valorMercado = valorMercado;
    this.estado = estado;
    this.ubicacion = ubicacion;
  }
}
