import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UUID } from 'crypto';
import { CreateActivoDto } from 'src/application/dto/create-activo.dto';
import { CreateActivoCommand } from 'src/application/use-case/activo/command/impl/create-activo.command';
import { UpdateActivoCommand } from 'src/application/use-case/activo/command/impl/update-activo.command';
import { GetActivoQuery } from 'src/application/use-case/activo/queries/impl/get-activo.query';

@Controller('activo')
export class ActivoController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createActivo(@Body() activoDto: CreateActivoDto) {
    return await this.commandBus.execute(new CreateActivoCommand(activoDto));
  }

  @Put(':id')
  async updateActivo(
    @Param('id') id: UUID,
    @Body() activoDto: CreateActivoDto,
  ) {
    return await this.commandBus.execute(
      new UpdateActivoCommand(id, activoDto),
    );
  }

  @Get()
  async getActivos() {
    return this.queryBus.execute(new GetActivoQuery());
  }
}
