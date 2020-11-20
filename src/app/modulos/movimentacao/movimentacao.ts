import { Processo } from '../processo/processo';

export class Movimentacao{
  id: number;
  tramitacao: string;
  origem: string;
  destino: string;
  usuario: string;
  processo = new Processo();
}
