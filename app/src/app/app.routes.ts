import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CancelarVooComponent } from './cancelar-voo/cancelar-voo.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './login/login.component';
import { CheckInComponent} from './check-in/check-in.component';
import { BuscarVooComponent } from './buscar-voo/buscar-voo.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SelecionarAssentoComponent } from './selecionar-assento/selecionar-assento.component';
import { SelecionarVooComponent } from './selecionar-voo/selecionar-voo.component';

export const ROUTES: Routes = [
    //{ path: '', component: HomeComponent },
    { path: 'check-in', component: CheckInComponent },
    { path: 'recuperar-senha', component: EsqueceuSenhaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cancelar-voo', component: CancelarVooComponent},
    { path: 'buscar-voo', component: BuscarVooComponent },
    { path: 'pagamento', component: PagamentoComponent },
    { path: 'selecionar-assento', component: SelecionarAssentoComponent },
    { path: 'selecionar-voo', component: SelecionarVooComponent }


];