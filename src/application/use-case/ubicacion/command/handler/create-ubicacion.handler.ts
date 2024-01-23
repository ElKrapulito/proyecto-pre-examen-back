import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUbicacionCommand } from '../impl/create-ubicacion.command';
import { Inject } from '@nestjs/common';
import { IUbicacionFactory } from '../../../../../domain/factories/ubicacion/iubicacion.factory';
import { IUbicacionRepository } from '../../../../../domain/repositories/iubicacion.repository';

@CommandHandler(CreateUbicacionCommand)
export class CreateUbicacionHandler
  implements ICommandHandler<CreateUbicacionCommand>
{
  constructor(
    @Inject(IUbicacionFactory) private ubicacionFactory: IUbicacionFactory,
    @Inject(IUbicacionRepository) private ubicacionRepo: IUbicacionRepository,
    private publisher: EventPublisher,
  ) {}

  async execute(command: CreateUbicacionCommand): Promise<any> {
    const { ubicacionDto } = command;
    const newUbicacion = this.ubicacionFactory.createUbicacion(
      ubicacionDto.nombre,
      ubicacionDto.descripcion,
    );
    const savedUbicacion = this.publisher.mergeObjectContext(
      await this.ubicacionRepo.save(newUbicacion),
    );

    savedUbicacion.commit();
    return savedUbicacion;
  }
}
