import { ActivoAbstract } from 'src/domain/models/abstracts/activo.abstract';
import { InventarioAbstract } from '../../../domain/models/abstracts/inventario.abstract';
import { UUID } from 'crypto';
import { PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { ActivoEntity } from './activo.entity';
export class InventarioEntity extends InventarioAbstract {
  @PrimaryColumn()
  id: UUID;
  @Column()
  fechaInventario: Date;
  @Column()
  ubicacion: string;
  @ManyToOne(() => ActivoEntity)
  activo: ActivoAbstract;
}
