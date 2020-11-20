import { Routes, RouterModule } from '@angular/router';
import { MovimentacaoComponent } from '../movimentacao/movimentacao.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { BeneficiarioFormComponent } from './beneficiario-form/beneficiario-form.component';
import { BeneficiarioComponent } from './beneficiario.component';

const benefRoutes: Routes = [
  { path: '', component: BeneficiarioComponent },
  { path: 'processo', component: UploadFileComponent },
  { path: 'novo', component: BeneficiarioFormComponent },
];

export const BeneficiarioRoutingRoutes = RouterModule.forChild(benefRoutes);
