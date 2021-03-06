import { Component, OnInit } from '@angular/core';

import { Voo } from './voo'

import { ViewChild, ElementRef} from '@angular/core';

import { UserDB } from '../services/user-db.service';

@Component({
  selector: 'app-cancelar-voo',
  templateUrl: './cancelar-voo.component.html',
  styleUrls: ['./cancelar-voo.component.css'],
  providers: [UserDB]
})

export class CancelarVooComponent implements OnInit {
  voo1 = {codigo: '130123', passageiro: "Roberto Carlos", embarque: '13/06/2022', origem: 'Recife, Congonhas', destino: 'São Paulo, Guarulhos', checkin: false};
  voo2 = {codigo: '225323', passageiro: "Amanda Medeiros", embarque: '18/08/2022', origem: 'São Paulo, Guarulhos', destino: 'Recife, Congonhas', checkin: false};
  voo3 = {codigo: '335723', passageiro: "Pedro Cuha", embarque: '13/05/2023', origem: 'Manaus, Aeroporto de Manaus', destino: 'Rio de Janeiro, Guararapes', checkin:false}
  voos: Voo[] = [this.voo1, this.voo2, this.voo3];
  codigoCancelar: string;
  digitouErrado: boolean = false;
  campoConfirmacao: string = "";
  @ViewChild('fecharPopUp') fecharPopUp: any;
  
  constructor(private userDB: UserDB) { 
    this.codigoCancelar = ""
  }

  limparCampoConfirmacao(){
    this.campoConfirmacao = "";
  }

  cancelarVoo(codigo: string): void {
    var result: Voo[] = [];
    var codigoCancelado: string = "";
    if (this.digitouCorreto()){
      for (let v of this.voos) {
        if (codigo != v.codigo){
          result.push(v);
        }
        else {
          codigoCancelado = v.codigo;
        }
      }
      this.voos = result;
      this.codigoCancelar = "";
      this.limparCampoConfirmacao();
      this.fecharPopUp.nativeElement.click();
      alert("Você cancelou o vôo " + codigoCancelado + " com sucesso!")
    }
    else {
      this.digitouErrado = true;
      this.limparCampoConfirmacao();
    }
  }

  digitouCorreto(): boolean {
    if (this.campoConfirmacao == "QUEROCANCELAR") {
      return true;
    }
    else {
      return false;
    }
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
  
  onMove(): void {
    this.digitouErrado = false;
  }

  ngOnInit(): void {
    //this.voos = this.userDB.listarVoosComprados()
    //console.log(this.voos)
}

}