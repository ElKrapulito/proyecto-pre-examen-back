import { UUID } from 'crypto';
import { Activo } from '../../models/implementations/activo.model';
import { UbicacionAbstract } from '../../models/abstracts/ubicacion.abstract';
export interface IActivoFactory {
  createActivo(
    nombre: string,
    descripcion: string,
    fechaAdquisicion: Date,
    valorCompra: number,
    valorLibro: number,
    valorMercado: number,
    estado: string,
    ubicacion: UbicacionAbstract | UUID,
  ): Activo;
}

export const IActivoFactory = Symbol('IActivoFactory');
