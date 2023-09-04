import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaProcessarComponent } from './pessoas/pessoa-processar/pessoa-processar.component';
import { ResultadoProcessComponent } from './pessoas/resultado-process/resultado-process.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pessoas' },
  { path: 'pessoas', loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule) },
  { path: 'process', component: PessoaProcessarComponent },
  { path: 'process/result', component: ResultadoProcessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
