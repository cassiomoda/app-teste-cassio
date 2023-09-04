import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasComponent } from './pessoas/pessoas.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaProcessarComponent } from './pessoa-processar/pessoa-processar.component';

@NgModule({
  declarations: [
    PessoasComponent,
    PessoaFormComponent,
    PessoaListaComponent,
    PessoaProcessarComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PessoasModule { }
