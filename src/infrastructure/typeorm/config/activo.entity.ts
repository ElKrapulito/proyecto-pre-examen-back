import { UUID } from 'crypto';
import { ActivoAbstract } from '../../../domain/models/abstracts/activo.abstract';
import { Column, PrimaryColumn } from 'typeorm';

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
}
