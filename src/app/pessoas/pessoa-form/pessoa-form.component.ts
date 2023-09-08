import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PessoaService } from '../pessoa.service';
import { UtilService } from 'src/app/util.service';

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
    private utilService: UtilService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form = this.formBuilder.group({
      id: new FormControl<number>(0),
      nome: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      cpf: new FormControl<string>('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
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
        error: (erro) => {
          console.log(erro);
          this.utilService.onError('Erro ao localizar doador.');
        },
      });
    }
  }

  getErrorMessage(nomeCampo: string): string {
    const campo = this.form.get(nomeCampo);

    if (campo?.hasError('required')) {
      return `O campo: ${nomeCampo}, deve ser informado.`;
    }

    if (campo?.hasError('minlength')) {
      const qtdCaractresRequerido = campo?.errors ? campo?.errors['minLength']['requiredLength'] : 3;
      return `O campo: ${nomeCampo}, precisa ter pelo menos ${qtdCaractresRequerido} caracteres.`;
    }

    if (campo?.hasError('maxlength')) {
      const qtdCaractresRequerido = campo.errors ? campo.errors['maxLength']['requiredLength'] : 255;
      return `O campo: ${nomeCampo}, excedeu a quantidade maxima de ${qtdCaractresRequerido} caracteres.`;
    }

    return '';
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {
    if (!this.form.value.nome) {
      this.utilService.exibirMensagem('O nome precisa ser informado.');
      return;
    }

    if (!this.form.value.cpf) {
      this.utilService.exibirMensagem('O CPF precisa ser informado.');
      return;
    }

    this.pessoaService.salvarPessoa(this.form.value).subscribe({
      next: (resultado) => this.onSuccess(),
      error: (erro) => {
        console.log(erro);
        this.utilService.onError('Erro ao tentar salvar Doador.')
      },
    });
  }

  onSuccess() {
    this.utilService.exibirMensagem('Pessoa salva com sucesso!!!')
    this.onCancel();
  }
}
