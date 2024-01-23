import { UUID } from 'crypto';

export class CreateActivoDto {
  nombre: string;
  descripcion: string;
  fechaAdquisicion: Date;
  valorCompra: number;
  valorLibro: number;
  valorMercado: number;
  estado: string;
  ubicacion: UUID;
}
