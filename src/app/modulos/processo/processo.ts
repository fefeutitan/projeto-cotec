import { Beneficiario } from '../beneficiario/beneficiario';

export class Processo {
  id: number;
  arquivo: string;
  tipo: string;
  beneficiario = new Beneficiario();
}
