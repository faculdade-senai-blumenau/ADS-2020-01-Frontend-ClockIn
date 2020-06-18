
import { Usuario, RegistroPonto } from './home.model';
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  usuarioUrl = "http://Clockin-env.eba-tuvab2zq.sa-east-1.elasticbeanstalk.com/usuario";
  registroPontoUrl = "http://Clockin-env.eba-tuvab2zq.sa-east-1.elasticbeanstalk.com/usuario";

  constructor(private http: HttpClient) {
    
  }

  buscarUsuarioPeloID(idUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usuarioUrl}/${idUsuario}`).pipe(
      map((obj) => obj)
    );
  }

  registrarPonto(registroPonto: RegistroPonto): Observable<RegistroPonto> {
    return this.http.post<RegistroPonto>(this.registroPontoUrl, registroPonto).pipe(
      map((obj) => obj)
    );
  }

  buscarRegistrosPontoDia(idRegistroPonto: number): Observable<RegistroPonto> {
    return this.http.get<RegistroPonto>(`${this.registroPontoUrl}/${idRegistroPonto}`).pipe(
      map((obj) => obj)
    );
  }

  listar(){
    return this.http.get<any>(this.registroPontoUrl);
  }
  
}