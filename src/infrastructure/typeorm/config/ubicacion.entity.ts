import { UUID } from 'crypto';
import { UbicacionAbstract } from '../../../domain/models/abstracts/ubicacion.abstract';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'ubicaciones' })
export class UbicacionEntity extends UbicacionAbstract {
  @PrimaryColumn()
  id: UUID;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
}
