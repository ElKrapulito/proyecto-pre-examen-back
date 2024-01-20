import { Activo } from '../../models/implementations/activo.model';
import { IActivoFactory } from './iactivo.factory';

export class ActivoFactory implements IActivoFactory {
  createActivo(
    nombre: string,
    descripcion: string,
    fechaAdquisicion: Date,
    valorCompra: number,
    valorLibro: number,
    valorMercado: number,
    estado: string,
  ): Activo {
    return new Activo(
      nombre,
      descripcion,
      fechaAdquisicion,
      valorCompra,
      valorLibro,
      valorMercado,
      estado,
    );
  }
}
