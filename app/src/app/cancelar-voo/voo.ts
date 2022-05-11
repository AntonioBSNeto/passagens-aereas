export class Voo {
    codigo: string;
    passageiro: string;
    embarque: string;
    origem: string;
    destino: string;
    checkin: boolean;
  
    constructor() {
      this.passageiro = "";
      this.codigo = "";
      this.embarque = "";
      this.origem = "";
      this.destino = "";
      this.checkin = false;
    }
}