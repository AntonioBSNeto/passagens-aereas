import { Component, OnInit } from '@angular/core';
import { VoosDisponiveisService } from '../services/voos-disponiveis.service';

@Component({
  selector: 'app-buscar-voo',
  templateUrl: './buscar-voo.component.html',
  styleUrls: ['./buscar-voo.component.css'],
  providers: [VoosDisponiveisService]
})
export class BuscarVooComponent implements OnInit {

  constructor(
    private voosDisponiveisService: VoosDisponiveisService,
  ) { }

  public voos: any[] = [];
  public origens: any[] = [];
  public destinos: any[] = [];

  async ngOnInit(): Promise<any> {
    this.voos = await this.voosDisponiveisService.getVoosDisponiveis();
    console.log(this.voos);
    for (let i = 0; i < 4; i++) {
      this.origens.push(this.voos[0][i]);
      this.destinos.push(this.voos[0][i]);
    }
    console.log(this.origens);
  }

}

