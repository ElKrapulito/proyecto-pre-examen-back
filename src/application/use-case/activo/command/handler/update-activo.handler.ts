import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UpdateActivoCommand } from '../impl/update-activo.command';
import { Inject } from '@nestjs/common';
import { IActivoFactory } from '../../../../../domain/factories/activo/iactivo.factory';
import { IActivoRepository } from '../../../../../domain/repositories/iactivo.repository';

@CommandHandler(UpdateActivoCommand)
export class UpdateActivoHandler
  implements ICommandHandler<UpdateActivoCommand>
{
  constructor(
    @Inject(IActivoFactory) private activoFactory: IActivoFactory,
    @Inject(IActivoRepository) private activoRepo: IActivoRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateActivoCommand): Promise<any> {
    const { activoId, activoDto } = command;
    const newActivo = this.activoFactory.createActivo(
      activoDto.nombre,
      activoDto.descripcion,
      activoDto.fechaAdquisicion,
      activoDto.valorCompra,
      activoDto.valorLibro,
      activoDto.valorMercado,
      activoDto.estado,
      activoDto.ubicacion,
    );
    newActivo.id = activoId;
    const savedActivo = this.publisher.mergeObjectContext(
      await this.activoRepo.save(newActivo),
    );
    savedActivo.commit();
    return savedActivo;
  }
}
