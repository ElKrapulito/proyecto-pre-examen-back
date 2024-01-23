import { UUID } from 'crypto';
import { ActivoAbstract } from '../../../domain/models/abstracts/activo.abstract';
import { Column, PrimaryColumn, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UbicacionEntity } from './ubicacion.entity';
import { UbicacionAbstract } from '../../../domain/models/abstracts/ubicacion.abstract';
@Entity({ name: 'activos' })
export class ActivoEntity extends ActivoAbstract {
  @PrimaryColumn()
  id: UUID;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
  @Column()
  fechaAdquisicion: Date;
  @Column()
  valorCompra: number;
  @Column()
  valorLibro: number;
  @Column()
  valorMercado: number;
  @Column()
  estado: string;
  @ManyToOne(() => UbicacionEntity, { eager: true })
  @JoinColumn()
  ubicacion: UbicacionAbstract | UUID;
}
