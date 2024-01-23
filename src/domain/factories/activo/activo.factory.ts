import { UUID } from 'crypto';
import { Activo } from '../../models/implementations/activo.model';
import { IActivoFactory } from './iactivo.factory';
import { UbicacionAbstract } from '../../models/abstracts/ubicacion.abstract';

export class ActivoFactory implements IActivoFactory {
  createActivo(
    nombre: string,
    descripcion: string,
    fechaAdquisicion: Date,
    valorCompra: number,
    valorLibro: number,
    valorMercado: number,
    estado: string,
    ubicacion: UbicacionAbstract | UUID,
  ): Activo {
    return new Activo(
      nombre,
      descripcion,
      fechaAdquisicion,
      valorCompra,
      valorLibro,
      valorMercado,
      estado,
      ubicacion,
    );
  }
}
