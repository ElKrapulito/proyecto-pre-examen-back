import { CreateUbicacionDto } from '../../../../dto/create-ubicacion.dto';
export class CreateUbicacionCommand {
  constructor(public readonly ubicacionDto: CreateUbicacionDto) {}
}
