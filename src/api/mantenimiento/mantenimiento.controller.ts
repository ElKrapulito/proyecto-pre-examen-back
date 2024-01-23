import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMantenimientoDto } from '../../application/dto/create-mantenimiento.dto';
import { CreateMantenimientoCommand } from 'src/application/use-case/mantenimiento/command/impl/create-mantenimiento.command';

@Controller('mantenimiento')
export class MantenimientoController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}
  @Post()
  async createMantenimiento(@Body() mantenimientoDto: CreateMantenimientoDto) {
    return this.commandBus.execute(
      new CreateMantenimientoCommand(mantenimientoDto),
    );
  }
}
