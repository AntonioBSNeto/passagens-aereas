import { Component, OnInit } from '@angular/core';

import { Voo } from './voo'
// import { Senha } from 'localOndeFicaraSenha';

@Component({
  selector: 'app-cancelar-voo',
  templateUrl: './cancelar-voo.component.html',
  styleUrls: ['./cancelar-voo.component.css']
})

export class CancelarVooComponent implements OnInit {
  voo1 = {codigo: '130123', embarque: '13/06/2022', origem: 'Recife, Congonhas', destino: 'São Paulo, Guarulhos'};
  voo2 = {codigo: '225323', embarque: '18/08/2022', origem: 'São Paulo, Guarulhos', destino: 'Recife, Congonhas'};
  voos: Voo[] = [this.voo1, this.voo2];
  codigoCancelar: string;
  
  constructor() { 
    this.codigoCancelar = ""
  }

  cancelarVoo(codigo: string): void {
    var result: Voo[] = [];
    for (let v of this.voos) {
      if (codigo != v.codigo){
        result.push(v);
      }
    }
    this.voos = result;
    this.codigoCancelar = "";
  }

  armazenaCodigo(codigo: string): void {
    this.codigoCancelar = "";
    this.codigoCancelar = codigo;
  }

  retornaCodigo(): string {
    var codigo: string = "";
    codigo = this.codigoCancelar;
    return codigo;
  }

  ngOnInit(): void {
  }

  // senhaParaCancelar(senha: Senha): void {

  //}

}
