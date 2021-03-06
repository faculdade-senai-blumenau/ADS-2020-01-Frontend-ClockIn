import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroPonto, Usuario, Setor, EspelhoPonto, Jornada, Parametro } from './app.model';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AppComponent } from './app.component';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient, public location: Location, private router: Router) {
  }

  urlBase = 'http://localhost:5000'
 // urlBase = 'http://clockinapi-env.eba-ckvnxj6m.us-east-1.elasticbeanstalk.com'
  public loading=false;
  urlBaseCep = 'http://viacep.com.br/ws'
  idUsuario: any;
  usuario: any;
  ctx:any;

  t: any;
  deslogado: any;
  parametro: Parametro;
  tempoDaSessao: any;

  controlaSessao() {
    clearTimeout(this.t);
    this.t = setTimeout(() => {
      this.logoutSessao();
    }, this.buscaTempoDaSessao())
  }

  logoutSessao(): any {
    this.deslogado = true;
    this.declararUsuario(null);
    this.router.navigate(["/login"]);
    return 1;
  }

  buscarUrlBase() {
    return this.urlBase;
  }
  setDeslogado(e) {
    this.deslogado = e;
  }
  getDeslogado() {
    return this.deslogado;
  }
  setarTempoDaSessao(tempo) {
    this.tempoDaSessao = tempo;
  }
  buscaTempoDaSessao() {
  
    return this.parametro.tempSessao;
  }

  buscarUsuario() {
    return this.idUsuario;
  }

  declararUsuario(usuario) {
    this.usuario = usuario
  }
  getUsuarioLogado() {
    return this.usuario;
  }

  setarUsuario(idUsuario) {
    this.idUsuario = idUsuario;
  }
  setParametro() {
    this.buscaParametro().subscribe((parametro) => {
      this.parametro = parametro;

    });

  }
  alterarParametros(parametro: Parametro) {
    return this.http.put<any>(`${this.urlBase}/parametro/1`, parametro);
  }

  buscaParametro() {
    return this.http.get<Parametro>(`${this.urlBase}/parametro/1`);
  }

  consultaCepCorreios(cep: string) {
    return this.http.get<any>(`${this.urlBaseCep}/${cep}/json`);
  }

  buscarRegistrosPontoUsuario(idUsuario: number) {
    
    return this.http.get<RegistroPonto>(`${this.urlBase}/registroPonto/usuario/${idUsuario}`);
  }

  buscarRegistroPontoSemanal(dataLimite: any, idUsuario: number ) {
    return this.http.get<RegistroPonto>(`${this.urlBase}/registroPonto/registroPontoSemanal?dataLimite=${dataLimite}&idUsuario=${idUsuario}`);
  }

  buscarRegistrosPontoAprovacoesPendentes() {
    return this.http.get<RegistroPonto>(`${this.urlBase}/registroPonto/aprovacaoPendente`);
  }

  buscarRegistrosPontoEditarMarcacao(idUsuario: number) {
    return this.http.get<RegistroPonto>(`${this.urlBase}/registroPonto/editarMarcacao/${idUsuario}`);
  }

  aprovacaoPendenteVisualizar(dataRegistro: any, idUsuario: number) {
    return this.http.get<RegistroPonto>(`${this.urlBase}/registroPonto/visualizarAprovacaoPendente?dataRegistro=${dataRegistro}&idUsuario=${idUsuario}`);
  }

  logar(loginUsuario: any) {
    return this.http.post(`${this.urlBase}/login/`, loginUsuario);
  }

  buscarEspelhoPonto(idUsuario: number) {
    return this.http.get<EspelhoPonto[]>(`${this.urlBase}/espelhoPonto/periodoEspelho?idUsuario=${idUsuario}&status=0`);
  }

  buscarEspelhoPontoAprovado(idUsuario: number) {
    return this.http.get<EspelhoPonto[]>(`${this.urlBase}/espelhoPonto/periodoEspelho?idUsuario=${idUsuario}&status=1`);
  }

  alterarStatusEspelho(espelhoPonto: EspelhoPonto): Observable<EspelhoPonto> {
    const url = `${this.urlBase}/espelhoPonto/${espelhoPonto.idEspelhoPonto}`;
    return this.http.put<EspelhoPonto>(url, espelhoPonto);
  }

  listarGenerico(table: any) {
    return this.http.get<Array<any>>(`${this.urlBase}/${table}`);
  }

  buscarPorIDGenerico(table: any, idRegistro: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlBase}/${table}/${idRegistro}`);
  }

  criarGenerico(table: any, objeto: any) {
    return this.http.post(`${this.urlBase}/${table}/`, objeto);
  }

  updateGenerico(table: any, idRegistro: any, objeto: any): Observable<any> {
    return this.http.put<any>(`${this.urlBase}/${table}/${idRegistro}`, objeto);
  }

  excluirGenerico(table: any, idRegistro: any) {
    return this.http.delete(`${this.urlBase}/${table}/${idRegistro}`);
  }

}
