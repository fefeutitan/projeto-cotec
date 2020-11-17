import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beneficiario } from './beneficiario/beneficiario';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  private readonly API = 'http://localhost:3000/beneficiarios';

  constructor(private http: HttpClient) { }


  list() {
    return this.http.get<Beneficiario[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }

  create(beneficiario) {

    return this.http.post(this.API, beneficiario).pipe(take(1));

  }
}
