import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PessoaService } from './../pessoa.service';
import { Pessoa } from '../model/pessoa';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css', '../../app.component.css'],
})
export class PessoasComponent {
  pessoasObservable: Observable<Pessoa[]> | undefined;

  constructor(
    private pessoaService: PessoaService,
    private utilService: UtilService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.carregarLista();
  }

  carregarLista() {
    this.pessoasObservable = this.pessoaService.listarPessoas().pipe(
      catchError((error) => {
        console.log(error);
        this.utilService.onError('Erro ao carregar lista de doadores.');
        return of([]);
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  onEdit(pessoa: Pessoa) {
    this.router.navigate(['edit', pessoa.id], {relativeTo: this.activatedRoute});
  }

  onDelete(id: number) {
    this.pessoaService.deletarPessoa(id).subscribe({
      next: (resultado) => {
        this.utilService.exibirMensagem('Pessoa deletada com sucesso!!!');
        this.carregarLista();
      },
      error: (erro) => {
        console.log(erro);
        this.utilService.onError('Erro ao tentar deletar pessoa. ');
      },
    });
  }
}
