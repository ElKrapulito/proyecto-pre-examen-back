import { IRepository } from '../../../app-core/src/core/iRepository';
import { Mantenimiento } from '../models/implementations/mantenimiento.model';
export interface IMantenimientoRepository extends IRepository<Mantenimiento> {}
export const IMantenimientoRepository = Symbol('IMantenimientoRepository');
