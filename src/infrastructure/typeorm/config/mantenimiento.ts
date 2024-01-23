import { ActivoAbstract } from 'src/domain/models/abstracts/activo.abstract';
import { MantenimientoAbstract } from '../../../domain/models/abstracts/mantenimiento.abstract';
import { UUID } from 'crypto';
import { PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { ActivoEntity } from './activo.entity';
export class MantenimientoEntity extends MantenimientoAbstract {
  @PrimaryColumn()
  id: UUID;
  @Column()
  tipoMantenimiento: string;
  @Column()
  fechaProgramacion: Date;
  @Column()
  fechaEjecucion: Date;
  @Column()
  costo: number;
  @Column()
  estado: boolean;
  @ManyToOne(() => ActivoEntity)
  activo: ActivoAbstract;
}
