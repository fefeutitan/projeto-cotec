import { ProcessoComponent } from './processo/processo.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';

const routes: Routes = [
  { path: '', component: BeneficiarioComponent},
  { path: 'processo', component: ProcessoComponent},
  { path: 'movimentacao', component: MovimentacaoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiarioRoutingModule { }
