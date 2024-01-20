import { Activo } from '../../models/implementations/activo.model';
export interface IActivoFactory {
  createActivo(
    nombre: string,
    descripcion: string,
    fechaAdquisicion: Date,
    valorCompra: number,
    valorLibro: number,
    valorMercado: number,
    estado: string,
  ): Activo;
}

export const IActivoFactory = Symbol('IActivoFactory');
