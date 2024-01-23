import { Controller, Post, Body, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUbicacionDto } from 'src/application/dto/create-ubicacion.dto';
import { CreateUbicacionCommand } from '../../application/use-case/ubicacion/command/impl/create-ubicacion.command';
import { GetUbicacionesQuery } from '../../application/use-case/ubicacion/queries/impl/get-ubicaciones.query';

@Controller('ubicacion')
export class UbicacionController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post()
  async createUbicacion(@Body() ubicacionDto: CreateUbicacionDto) {
    return await this.commandBus.execute(
      new CreateUbicacionCommand(ubicacionDto),
    );
  }

  @Get()
  async getUbicaciones() {
    return await this.queryBus.execute(new GetUbicacionesQuery());
  }
}
