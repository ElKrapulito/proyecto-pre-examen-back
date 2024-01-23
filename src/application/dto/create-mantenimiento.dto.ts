import { UUID } from 'crypto';

export class CreateMantenimientoDto {
  tipoMantenimiento: string;
  fechaProgramacion: Date;
  fechaEjecucion: Date;
  costo: number;
  estado: boolean;
  activo: UUID;
}
