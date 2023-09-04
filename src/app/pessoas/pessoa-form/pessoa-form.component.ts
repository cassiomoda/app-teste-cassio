import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

import { PessoaService } from '../pessoa.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css', '../../app.component.css'],
})
export class PessoaFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      id: new FormControl<number>(0),
      nome: new FormControl<string>('', {nonNullable: true}),
      cpf: new FormControl<string>('', {nonNullable: true}),
      rg: new FormControl<string>(''),
      data_nasc: new FormControl<string>(''),
      sexo: new FormControl<string>(''),
      mae: new FormControl<string>(''),
      pai: new FormControl<string>(''),
      email: new FormControl<string>(''),
      cep: new FormControl<string>(''),
      endereco: new FormControl<string>(''),
      numero: new FormControl<string>(''),
      bairro: new FormControl<string>(''),
      cidade: new FormControl<string>(''),
      estado: new FormControl<string>(''),
      telefone_fixo: new FormControl<string>(''),
      celular: new FormControl<string>(''),
      altura: new FormControl<number>(0),
      peso: new FormControl<number>(0),
      tipo_sanguineo: new FormControl<string>(''),
    });

    this.activatedRoute.paramMap.subscribe((obs) => {
      this.onEdit(obs.get('id'));
    });
  }

  onEdit(id: string | null) {
    if (id) {
      this.pessoaService.getById(id).subscribe({
        next: (pessoa) => this.form.setValue({
          id: pessoa.id,
          nome: pessoa.nome,
          cpf: pessoa.cpf,
          rg: pessoa.rg,
          data_nasc: pessoa.data_nasc,
          sexo: pessoa.sexo,
          mae: pessoa.mae,
          pai: pessoa.pai,
          email: pessoa.email,
          cep: pessoa.cep,
          endereco: pessoa.endereco,
          numero: pessoa.numero,
          bairro: pessoa.bairro,
          cidade: pessoa.cidade,
          estado: pessoa.estado,
          telefone_fixo: pessoa.telefone_fixo,
          celular: pessoa.celular,
          altura: pessoa.altura,
          peso: pessoa.peso,
          tipo_sanguineo: pessoa.tipo_sanguineo,
        }),
        error: (erro) => this.onError('Erro ao localizar doador.', erro),
      });
    }
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    if (!this.form.value.nome) {
      this.snackBar.open('O nome precisa ser informado.', '', {duration: 5000});
      return;
    }

    if (!this.form.value.cpf) {
      this.snackBar.open('O CPF precisa ser informado.', '', {duration: 5000});
      return;
    }

    this.pessoaService.salvarPessoa(this.form.value).subscribe({
      next: (resultado) => this.onSuccess(),
      error: (erro) => this.onError('Erro ao tentar salvar Doador.', erro),
    });
  }

  onSuccess() {
    this.snackBar.open('Pessoa salva com sucesso!!!', '', {duration: 5000});
    this.onCancel();
  }

  onError(errorMsg: string, erro: string) {
    console.log(erro);
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
