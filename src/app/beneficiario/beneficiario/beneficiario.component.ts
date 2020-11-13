import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../beneficiario';
import { BeneficiarioService } from '../beneficiario.service';

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
