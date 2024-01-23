import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUbicacionesQuery } from '../impl/get-ubicaciones.query';
import { Inject } from '@nestjs/common';
import { IUbicacionRepository } from '../../../../../domain/repositories/iubicacion.repository';

@QueryHandler(GetUbicacionesQuery)
export class GetUbicacionesHandler
  implements IQueryHandler<GetUbicacionesQuery>
{
  constructor(
    @Inject(IUbicacionRepository)
    private ubicacionRepository: IUbicacionRepository,
  ) {}

  execute(): Promise<any> {
    return this.ubicacionRepository.getAll();
  }
}
