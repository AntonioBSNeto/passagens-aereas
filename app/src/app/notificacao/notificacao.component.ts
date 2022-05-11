import {Component, Input, OnInit} from '@angular/core';
import {NotificacaoService} from "../services/notificacao.service";
import {PromocaoService} from "../services/promocao.service";

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {
  //pegar as promoções e mostrar como notificação
  @Input() notificacoes: any;

  constructor(private notificacaoService: NotificacaoService, private promocaoService: PromocaoService) {

  }
  ngOnInit(): void {
    this.notificacoes = this.promocaoService.getPromocoes();
    for(let notificacao of this.notificacoes){
      notificacao.status = false;
    }
  }
  //função para deletar notificação
  removerNotificacao(notificacao: any) {
    this.notificacaoService.removeNotificacao(notificacao);
  }

  removerTodasNotificacoes() {
    this.notificacaoService.removeTodasNotificacoes();
  }
}

