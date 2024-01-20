import { IRepository } from '../../../app-core/src/core/iRepository';
import { Activo } from '../models/implementations/activo.model';

export interface IActivoRepository extends IRepository<Activo> {}
export const IActivoRepository = Symbol('IActivoRepository');
