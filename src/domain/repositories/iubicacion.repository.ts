import { IRepository } from './../../../app-core/src/core/iRepository';
import { Ubicacion } from '../models/implementations/ubicacion.model';

export interface IUbicacionRepository extends IRepository<Ubicacion> {}
export const IUbicacionRepository = Symbol('IUbicacionRepository');
