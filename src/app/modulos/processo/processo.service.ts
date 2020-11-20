import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { Processo } from './processo';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  private readonly API = 'http://localhost:3000/processos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Processo[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }

  create(beneficiario) {

    return this.http.post(this.API, beneficiario).pipe(take(1));

  }
}
