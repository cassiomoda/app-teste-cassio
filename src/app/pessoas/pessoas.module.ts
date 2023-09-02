import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasComponent } from './pessoas/pessoas.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PessoasComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PessoasModule { }
