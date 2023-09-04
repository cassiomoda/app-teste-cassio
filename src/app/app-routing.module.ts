import { PessoasModule } from './pessoas/pessoas.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaProcessarComponent } from './pessoas/pessoa-processar/pessoa-processar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pessoas' },
  { path: 'pessoas', loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule) },
  { path: 'process', component: PessoaProcessarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
