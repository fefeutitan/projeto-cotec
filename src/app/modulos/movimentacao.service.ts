import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { Movimentacao } from './movimentacao/movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private readonly API = 'http://localhost:3000/movimentacoes';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Movimentacao[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }

  create(beneficiario) {

    return this.http.post(this.API, beneficiario).pipe(take(1));

  }
}
