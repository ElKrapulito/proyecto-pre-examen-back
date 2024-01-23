import { CreateActivoHandler } from '../use-case/activo/command/handler/create-activo.handler';
import { UpdateActivoHandler } from '../use-case/activo/command/handler/update-activo.handler';
import { CreateMantenimientoHandler } from '../use-case/mantenimiento/command/handler/create-mantenimiento.handler';
import { CreateUbicacionHandler } from '../use-case/ubicacion/command/handler/create-ubicacion.handler';

export const CommandHandlers = [
  CreateActivoHandler,
  UpdateActivoHandler,
  CreateMantenimientoHandler,
  CreateUbicacionHandler,
];
