import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-processar',
  templateUrl: './pessoa-processar.component.html',
  styleUrls: ['./pessoa-processar.component.css', '../../app.component.css'],
})
export class PessoaProcessarComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pessoaService: PessoaService,
  ) {
    this.form = this.formBuilder.group({
      json_lista_doadores: new FormControl<string>(''),
      gravar_doadores: new FormControl<boolean>(false),
    });
  }

  onCancel() {
    this.router.navigate(['']);
  }

  onProcess() {
    this.pessoaService.processarListaDoadores(
      this.form.value.json_lista_doadores,
      this.form.value.gravar_doadores
    );

    this.router.navigate(['result'], {relativeTo: this.activatedRoute});
  }
}
