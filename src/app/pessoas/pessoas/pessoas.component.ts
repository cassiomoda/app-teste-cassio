import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PessoaService } from './../pessoa.service';
import { Pessoa } from '../model/pessoa';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css', '../../app.component.css'],
})
export class PessoasComponent {
  pessoasObservable: Observable<Pessoa[]>;

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.pessoasObservable = this.pessoaService.listarPessoas().pipe(
      catchError((error) => {
        console.log(error);
        this.onError('Erro ao carregar lista de doadores.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
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
        this.snackBar.open('Pessoa deletada com sucesso!!!', '', {duration: 5000});
        window.location.reload();
      },
      error: (erro) => this.onError(`Erro ao tentar deletar pessoa. Erro: ${erro}`),
    });
  }
}
