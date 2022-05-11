import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  listaPromocao: any[];

  constructor() {
    this.listaPromocao = [];
  }
  getPromocoes() {
    return this.listaPromocao;
  }
  adicionar(promocao: any) {
    this.listaPromocao.push(promocao);
  }
  excluir(promocao: any) {
    const index = this.listaPromocao.indexOf(promocao);
    this.listaPromocao.splice(index, 1);
  }
}

