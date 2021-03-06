
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { ParametroComponent } from './components/parametro/parametro.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EditarMarcacaoComponent } from './components/editarmarcacao/editarmarcacao.component';
import { AprovacoesPendentesComponent } from './components/aprovacoespendentes/aprovacoespendentes.component';
import { EspelhopontoComponent } from './components/espelhoponto/espelhoponto.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'editarmarcacao', component: EditarMarcacaoComponent },
  { path: 'cadastros', component: CadastrosComponent },
  { path: 'espelhoponto', component: EspelhopontoComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'aprovacoespendentes', component: AprovacoesPendentesComponent },
  { path: 'parametros', component: ParametroComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
