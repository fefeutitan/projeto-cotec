import { Movimentacao } from '../movimentacao/movimentacao';

export class Processo {
  id: number;
  movimentacao = new Movimentacao();
}
