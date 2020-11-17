import { ReactiveFormsModule } from '@angular/forms';
import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { ProcessoComponent } from './processo/processo.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { BeneficiarioFormComponent } from './beneficiario/beneficiario-form/beneficiario-form.component';



@NgModule({
  declarations:
  [BeneficiarioComponent,
    ProcessoComponent,
    MovimentacaoComponent,
    BeneficiarioFormComponent],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule,
    ReactiveFormsModule
  ]
})
export class BeneficiarioModule { }
