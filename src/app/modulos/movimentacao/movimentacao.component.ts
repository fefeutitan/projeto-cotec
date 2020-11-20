import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from '../movimentacao.service';
import { Movimentacao } from './movimentacao';


@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent implements OnInit {

  movimentacaos: Movimentacao[];

  constructor(private service: MovimentacaoService) { }

  ngOnInit() {
    this.service.list().subscribe(dados => this.movimentacaos = dados);
  }

}

