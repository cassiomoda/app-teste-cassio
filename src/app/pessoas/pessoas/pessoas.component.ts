import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
export class PessoasComponent implements OnInit {
  displayedColumns: string[];
  pessoasObservable: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService, public dialog: MatDialog) {
    this.displayedColumns = [
      'nome',
      'cpf',
      'data_nasc',
      'sexo',
      'email',
      'cidade',
      'estado',
      'tipo_sanguineo',
    ];
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
      data: errorMsg
    });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
}
