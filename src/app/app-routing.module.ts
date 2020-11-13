import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'beneficiario'
  },
  {
    path: 'beneficiario',
    loadChildren: () => import('./beneficiario/beneficiario.module').then(m => m.BeneficiarioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
