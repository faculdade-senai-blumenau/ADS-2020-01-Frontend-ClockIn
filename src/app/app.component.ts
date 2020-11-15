import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listaDePontos: any;
  registroPonto: any;

  urlBase = this.appService.buscarUrlBase();
  idUsuario = this.appService.buscarUsuario();
  dataInicialFiltro: DatePipe;
  dtTrigger: any;


  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  /* Retorna lista de registros da tabela de pontos */
  buscarRegistrosPonto(idUsuario: number, dataInicial: string, dataFinal: string) {
    this.appService.buscarRegistrosPontoUsuario(idUsuario).subscribe(
      resposta => this.registroPonto = resposta);
    const groups = new Set(this.registroPonto
      .filter(i => i.dataRegistro >= dataInicial && (i.dataRegistro <= dataFinal || dataFinal == null))
      .map(item => item.dataRegistro));
    this.listaDePontos = [];
    groups.forEach(g =>
      this.listaDePontos.push({
        dataRegistro: g,
        values: this.registroPonto.filter(i => i.dataRegistro === g)
      }),
    );
    return (this.listaDePontos);
  }

}

