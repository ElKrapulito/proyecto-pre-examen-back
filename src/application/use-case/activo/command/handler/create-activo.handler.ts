import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateActivoCommand } from '../impl/create-activo.command';
import { IActivoRepository } from '../../../../../domain/repositories/iactivo.repository';
import { Inject } from '@nestjs/common';
import { IActivoFactory } from '../../../../../domain/factories/activo/iactivo.factory';

@CommandHandler(CreateActivoCommand)
export class CreateActivoHandler
  implements ICommandHandler<CreateActivoCommand>
{
  constructor(
    @Inject(IActivoRepository) private activoRepo: IActivoRepository,
    @Inject(IActivoFactory) private activoFactory: IActivoFactory,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateActivoCommand): Promise<any> {
    const { createActivoDto } = command;
    const newActivo = this.activoFactory.createActivo(
      createActivoDto.nombre,
      createActivoDto.descripcion,
      createActivoDto.fechaAdquisicion,
      createActivoDto.valorCompra,
      createActivoDto.valorLibro,
      createActivoDto.valorMercado,
      createActivoDto.estado,
    );
    const saveActivo = this.publisher.mergeObjectContext(
      await this.activoRepo.save(newActivo),
    );
    saveActivo.commit();
    return saveActivo;
  }
}
