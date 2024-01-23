import { CreateActivoDto } from '../../../../dto/create-activo.dto';
export class CreateActivoCommand {
  constructor(public readonly createActivoDto: CreateActivoDto) {}
}
