import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css', '../../app.component.css'],
})
export class PessoaFormComponent {

  form: FormGroup;

  constructor (private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
      cpf: [null],
      rg: [null],
      data_nasc: [null],
      sexo: [null],
      mae: [null],
      pai: [null],
      email: [null],
      cep: [null],
      endereco: [null],
      numero: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
      telefone_fixo: [null],
      celular: [null],
      altura: [null],
      peso: [null],
      tipo_sanguineo: [null]
    });
  }

  onCancel() {

  }

  onSubmit() {

  }
}
