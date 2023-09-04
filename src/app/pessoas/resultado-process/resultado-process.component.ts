import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ResultadoProcessamento } from '../model/resultado-processamento';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resultado-process',
  templateUrl: './resultado-process.component.html',
  styleUrls: ['./resultado-process.component.css', '../../app.component.css']
})
export class ResultadoProcessComponent {

  resultadoObservable: Observable<ResultadoProcessamento> | undefined;

  constructor(
    private pessoaService: PessoaService,
    private location: Location,
    public dialog: MatDialog,
  ) {
    this.resultadoObservable = this.pessoaService.getResultadoProcessamento();
    this.resultadoObservable?.subscribe({
      error: (erro) => this.onError('Erro ao processar lista de doares', erro),
    });
  }

  onError(errorMsg: string, erro: string) {
    console.log(erro);

    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onClose() {
    this.location.back();
  }
}
