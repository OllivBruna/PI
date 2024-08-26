import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telahorarios',
  templateUrl: './telahorarios.page.html',
  styleUrls: ['./telahorarios.page.scss'],
})
export class TelahorariosPage implements OnInit {

  constructor(private navPage:NavController) { }

  ngOnInit() {
  }

  VoltarTelaPrincipal(){
    this.navPage.navigateBack("telaprincipal")
  }
}
