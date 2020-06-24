
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { ParametroComponent } from './components/parametro/parametro.component';
import { LoaderComponent } from './components/template/img/loader/loader.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarMarcacaoComponent } from './components/editarmarcacao/editarmarcacao.component';
import { AprovacoesPendentesComponent } from './components/aprovacoespendentes/aprovacoespendentes.component';
import { EspelhoPontoComponent } from './components/espelhoponto/espelhoponto.component';


@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, HomeComponent, RelatoriosComponent,
    AprovacoesPendentesComponent, CadastrosComponent, EspelhoPontoComponent,
    ParametroComponent, LoaderComponent, PagenotfoundComponent, EditarMarcacaoComponent],

  imports: [RouterModule, BrowserModule, AppRoutingModule, HttpClientModule,
    ReactiveFormsModule, NgbModule, NgbPaginationModule, Ng2SearchPipeModule, FormsModule],

  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: AppService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
