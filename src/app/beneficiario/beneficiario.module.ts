import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';



@NgModule({
  declarations: [BeneficiarioComponent],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule
  ]
})
export class BeneficiarioModule { }
