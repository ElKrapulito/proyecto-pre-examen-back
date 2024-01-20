import { IRepository } from '../../../app-core/src/core/iRepository';
import { Inventario } from '../models/implementations/inventario.model';
export interface IInventarioRepository extends IRepository<Inventario> {}
export const IInventarioRepository = Symbol('IInventarioRepository');
