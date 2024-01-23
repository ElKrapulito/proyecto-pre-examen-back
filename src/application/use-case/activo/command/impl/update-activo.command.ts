import { UUID } from 'crypto';
import { CreateActivoDto } from '../../../../dto/create-activo.dto';

export class UpdateActivoCommand {
  constructor(
    public readonly activoId: UUID,
    public readonly activoDto: CreateActivoDto,
  ) {}
}
