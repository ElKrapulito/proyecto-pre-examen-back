import { Ubicacion } from 'src/domain/models/implementations/ubicacion.model';
import { IUbicacionFactory } from './iubicacion.factory';

export class UbicacionFactory implements IUbicacionFactory {
  createUbicacion(nombre: string, descripcion: string): Ubicacion {
    return new Ubicacion(nombre, descripcion);
  }
}
