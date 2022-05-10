import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgxMaskModule } from 'ngx-mask';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { CheckInComponent } from './check-in/check-in.component';
import { BuscarVooComponent } from './buscar-voo/buscar-voo.component';
import { SelecionarVooComponent } from './selecionar-voo/selecionar-voo.component';
import { SelecionarAssentoComponent } from './selecionar-assento/selecionar-assento.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { Autenticacao } from './services/auth.service';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { CancelarVooComponent } from './cancelar-voo/cancelar-voo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueceuSenhaComponent,
    CheckInComponent,
    CancelarVooComponent,
    BuscarVooComponent,
    SelecionarVooComponent,
    SelecionarAssentoComponent,
    PagamentoComponent,
    NotificacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [Autenticacao],
  bootstrap: [AppComponent]
})
export class AppModule { }
