import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-processar',
  templateUrl: './pessoa-processar.component.html',
  styleUrls: ['./pessoa-processar.component.css', '../../app.component.css']
})
export class PessoaProcessarComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      json_lista_doadores: new FormControl<string>(''),
      gravar_doadores: new FormControl<boolean>(false),
    })
  }

  onCancel() {
    this.router.navigate(['']);
  }

  onProcess() {
    console.log('onProcess');
    console.log(`gravar doadores: ${this.form.value.gravar_doadores}`);
    console.log(this.form.value);
  }
}
