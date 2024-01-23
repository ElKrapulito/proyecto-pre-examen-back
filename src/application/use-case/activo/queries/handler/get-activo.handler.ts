import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetActivoQuery } from '../impl/get-activo.query';
import { Inject } from '@nestjs/common';
import { IActivoRepository } from '../../../../../domain/repositories/iactivo.repository';

@QueryHandler(GetActivoQuery)
export class GetActivoHandler implements IQueryHandler<GetActivoQuery> {
  constructor(
    @Inject(IActivoRepository) private activoRepo: IActivoRepository,
  ) {}
  async execute(): Promise<any> {
    return this.activoRepo.getAll();
  }
}
