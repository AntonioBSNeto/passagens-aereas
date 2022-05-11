import {PromocaoService} from "./services/promocao.service";
import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private promocaoService : PromocaoService) {

  }
  criarPromocao($event: any) {
    this.promocaoService.adicionar($event);
  ngOnInit() {
    let firebaseConfig = {
      apiKey: "AIzaSyAhvJu__52mfMXdddpQRhYDPWNRDIJr0QA",
      authDomain: "passagens-aereas-ess.firebaseapp.com",
      projectId: "passagens-aereas-ess",
      storageBucket: "passagens-aereas-ess.appspot.com",
      messagingSenderId: "680421546416",
      appId: "1:680421546416:web:6090e87bd9bf815b941e75",
      measurementId: "G-BT67HG3555"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
  }
}
