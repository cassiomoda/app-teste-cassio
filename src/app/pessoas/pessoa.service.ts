import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Pessoa } from './model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly urlApi = 'http://localhost:8080/api-teste-cassio/pessoas';

  constructor(private httpClient: HttpClient) {
  }

  listarPessoas() {
    return this.httpClient.get<Pessoa[]>(this.urlApi).pipe(
      tap(lista => console.log(lista))
    );
  }
}
