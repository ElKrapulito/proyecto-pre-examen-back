import { CreateActivoHandler } from '../use-case/activo/command/handler/create-activo.handler';
import { UpdateActivoHandler } from '../use-case/activo/command/handler/update-activo.handler';
import { CreateMantenimientoHandler } from '../use-case/mantenimiento/command/handler/create-mantenimiento.handler';

export const CommandHandlers = [
  CreateActivoHandler,
  UpdateActivoHandler,
  CreateMantenimientoHandler,
];
