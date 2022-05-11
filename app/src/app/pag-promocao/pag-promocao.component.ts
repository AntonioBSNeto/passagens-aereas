import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PromocaoService} from "../services/promocao.service";

@Component({
  selector: 'app-pag-promocao',
  templateUrl: './pag-promocao.component.html',
  styleUrls: ['./pag-promocao.component.css']
})
export class PagPromocaoComponent implements OnInit {

  @Output() aoCriarPromocao = new EventEmitter<any>();
  promocoes: any [];
  titulo: any;
  descricao: any;
  valor: any;
  dataInicio: any;
  dataFim: any;
  status: any;

  constructor(private router: Router, private route: ActivatedRoute, private promocaoService: PromocaoService) {
    this.promocoes = [];
  }
  ngOnInit() {
    this.promocoes = this.promocaoService.getPromocoes();
  }

  criarPromocao() {
    let promocao = {
      titulo: this.titulo,
      descricao: this.descricao,
      valor: this.valor,
      dataInicio: this.dataInicio,
      dataFim: this.dataFim,
      status: this.status
    };
    console.log(promocao);
    this.aoCriarPromocao.emit(promocao);
  }
  editar(promocao: any) {
    this.router.navigate(['/promocao/editar', promocao.id]);
  }
  excluir(promocao: any) {
    this.promocaoService.excluir(promocao.id);
  }

}
