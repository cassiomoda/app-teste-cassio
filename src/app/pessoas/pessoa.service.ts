import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pessoa } from './model/pessoa';
import { ResultadoProcessamento } from './model/resultado-processamento';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly urlApi = 'http://localhost:8080/api-teste-cassio/pessoas';
  private resultadoObservable: Observable<ResultadoProcessamento> | undefined;

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

  processarListaDoadores(json: string, gravar_doadores: boolean) {
    if (json) {
      this.resultadoObservable = this.httpClient.post<ResultadoProcessamento>(`${this.urlApi}/processar-doadores/${gravar_doadores}`, JSON.parse(json));
    } else {
      this.resultadoObservable = this.httpClient.get<ResultadoProcessamento>(`${this.urlApi}/processar-doadores-gravados`);
    }

    return this.resultadoObservable;
  }

  getResultadoProcessamento() {
    return this.resultadoObservable;
  }
}
