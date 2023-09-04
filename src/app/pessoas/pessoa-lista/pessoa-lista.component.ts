import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent {

  readonly displayedColumns: string[];
  @Input() pessoas: Pessoa[];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delte = new EventEmitter(false);

  constructor() {
    this.displayedColumns = [
      'nome',
      'cpf',
      'data_nasc',
      'sexo',
      'cidade',
      'estado',
      'tipo_sanguineo',
      'actions',
    ];

    this.pessoas = [];
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(pessoa: Pessoa) {
    this.edit.emit(pessoa);
  }

  onDelete(id: number) {
    this.delte.emit(id);
  }
}
