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
    return this.httpClient.get<Pessoa[]>(this.urlApi);
  }

  getById(id: string) {
    return this.httpClient.get<Pessoa>(`${this.urlApi}/${id}`);
  }

  salvarPessoa(pessoa: Partial<Pessoa>){
    return this.httpClient.post(this.urlApi, pessoa);
  }

  deletarPessoa(id: number) {
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }
}
