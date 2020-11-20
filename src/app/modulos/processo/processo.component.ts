import { Component, OnInit } from '@angular/core';
import { Processo } from './processo';
import { ProcessoService } from './processo.service';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss'],
})
export class ProcessoComponent implements OnInit {

  processos: Processo[];

  constructor(private service: ProcessoService) {}

  ngOnInit() {
    this.service.list().subscribe(dados => this.processos = dados);
  }
}
