import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { ProcessoComponent } from './processo/processo.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';



@NgModule({
  declarations:
  [BeneficiarioComponent,
    ProcessoComponent,
    MovimentacaoComponent],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule
  ]
})
export class BeneficiarioModule { }
