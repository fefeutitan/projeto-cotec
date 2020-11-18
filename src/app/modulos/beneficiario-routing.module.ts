import { ProcessoComponent } from './processo/processo.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { BeneficiarioFormComponent } from './beneficiario/beneficiario-form/beneficiario-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  { path: '', component: BeneficiarioComponent },
  { path: 'processo', component: UploadFileComponent },
  // { path: 'upload', component: UploadFileComponent },
  { path: 'movimentacao', component: MovimentacaoComponent },
  { path: 'novo', component: BeneficiarioFormComponent },
  { path: 'editar/:id', component: BeneficiarioFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
})
export class BeneficiarioRoutingModule {}
