import { AppComponent } from './app.component';
import { BeneficiarioComponent } from './modulos/beneficiario/beneficiario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimentacaoComponent } from './modulos/movimentacao/movimentacao.component';
import { ProcessoComponent } from './modulos/processo/processo.component';
import { UploadFileComponent } from './modulos/upload-file/upload-file.component';

const routes: Routes = [
  {
     path: '', pathMatch: 'full', redirectTo: 'beneficiario'
  },
  {
    path: 'beneficiario',
     loadChildren: () => import('./modulos/beneficiario.module').then(m => m.BeneficiarioModule)
  },
  {
    path: 'movimentacao', component: MovimentacaoComponent
  },
  {
    path: 'processo', component: ProcessoComponent
  },
  {
    path: 'upload', component: UploadFileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)//,
    // MovimentacaoComponent,
    // ProcessoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
