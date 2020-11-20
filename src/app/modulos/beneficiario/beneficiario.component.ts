import { Component, OnInit } from '@angular/core';
import { BeneficiarioService } from '../beneficiario.service';
import { Beneficiario } from './beneficiario';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.scss']
})
export class BeneficiarioComponent implements OnInit {

  beneficiarios: Beneficiario[];

  constructor(private service: BeneficiarioService) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.beneficiarios = dados);
  }

  onRefresh(){

  };

  onEdit(){

  };

  onDelete(){

  };

  onConfirmDelete(){

  };
  onDeclineDelete(){

  };

}
