import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Pessoa[];
  displayedColumns: string[];

  constructor() {
    this.pessoas = [
      {
        _id: 1,
        nome: 'Milena Analu Pires',
        cpf: '775.256.099-50',
        rg: '44.084.541-5',
        data_nasc: '23\/05\/1964',
        sexo: 'Feminino',
        mae: 'Isadora Marli',
        pai: 'Noah Severino César Pires',
        email: 'mmilenaanalupires@keffin.com.br',
        cep: '39801-678',
        endereco: 'Rua Kurt W. Rothe',
        numero: '675',
        bairro: 'Castro Pires',
        cidade: 'Teófilo Otoni',
        estado: 'MG',
        telefone_fixo: '(33) 3611-4613',
        celular: '(33) 98481-0191',
        altura: 1.53,
        peso: 80,
        tipo_sanguineo: "O-"
      },
      {
        _id: 2,
        nome: 'Marcos Vinicius Kevin Samuel Santos',
        cpf: '024.934.035-68',
        rg: '10.701.456-7',
        data_nasc: '07\/09\/1992',
        sexo: 'Masculino',
        mae: 'Isabella Andrea',
        pai: 'Lorenzo Marcos André Santos',
        email: 'marcosviniciuskevinsamuelsantos_@dhl.com',
        cep: '49091-043',
        endereco: 'Rua Manoel de Oliveira França',
        numero: '634',
        bairro: 'Jardim Centenário',
        cidade: 'Aracaju',
        estado: 'SE',
        telefone_fixo: '(79) 2686-2642',
        celular: '(79) 99666-0063',
        altura: 1.92,
        peso: 95,
        tipo_sanguineo: 'O-'
      }
    ];
    this.displayedColumns = ['nome', 'cpf', 'data_nasc', 'sexo', 'email', 'cidade', 'estado', 'tipo_sanguineo'];
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
}
