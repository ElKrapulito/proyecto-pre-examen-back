import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateMantenimientoCommand } from '../impl/create-mantenimiento.command';
import { IMantenimientoFactory } from '../../../../../domain/factories/mantenimiento/imantenimiento.factory';
import { Inject } from '@nestjs/common';
import { IMantenimientoRepository } from '../../../../../domain/repositories/imantenimiento.repository';

@CommandHandler(CreateMantenimientoCommand)
export class CreateMantenimientoHandler
  implements ICommandHandler<CreateMantenimientoCommand>
{
  constructor(
    @Inject(IMantenimientoFactory)
    private mantenimientoFactory: IMantenimientoFactory,
    @Inject(IMantenimientoRepository)
    private mantenimientoRepository: IMantenimientoRepository,
    private publisher: EventPublisher,
  ) {}

  async execute(command: CreateMantenimientoCommand): Promise<any> {
    const { mantenimientoDto } = command;
    const newMantenimiento = this.mantenimientoFactory.createMantenimiento(
      mantenimientoDto.tipoMantenimiento,
      mantenimientoDto.fechaProgramacion,
      mantenimientoDto.fechaEjecucion,
      mantenimientoDto.costo,
      mantenimientoDto.estado,
      mantenimientoDto.activo,
    );

    const savedMantenimiento = this.publisher.mergeObjectContext(
      await this.mantenimientoRepository.save(newMantenimiento),
    );

    savedMantenimiento.commit();
    return savedMantenimiento;
  }
}
