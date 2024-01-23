import { Ubicacion } from '../../models/implementations/ubicacion.model';
export interface IUbicacionFactory {
  createUbicacion(nombre: string, descripcion: string): Ubicacion;
}

export const IUbicacionFactory = Symbol('IUbicacionFactory');
