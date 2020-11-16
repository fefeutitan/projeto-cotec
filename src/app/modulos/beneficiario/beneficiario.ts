import { Processo } from '../processo/processo';

export class Beneficiario{
  id: number;
  nome: string;
  cpf: string;
  orgao: string;
  matricula: string;
  processo = new Processo();
}
