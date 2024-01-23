import { CreateMantenimientoDto } from '../../../../dto/create-mantenimiento.dto';
export class CreateMantenimientoCommand {
  constructor(public readonly mantenimientoDto: CreateMantenimientoDto) {}
}
