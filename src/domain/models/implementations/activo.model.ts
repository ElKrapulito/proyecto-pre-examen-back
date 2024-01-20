import { UUID, randomUUID } from 'crypto';
import { ActivoAbstract } from '../abstracts/activo.abstract';

export class Activo extends ActivoAbstract {
  nombre: string;
  descripcion: string;
  fechaAdquisicion: Date;
  valorCompra: number;
  valorLibro: number;
  valorMercado: number;
  estado: string;
  id: UUID;

  constructor(
    nombre: string,
    descripcion: string,
    fechaAdquisicion: Date,
    valorCompra: number,
    valorLibro: number,
    valorMercado: number,
    estado: string,
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
  }
}
