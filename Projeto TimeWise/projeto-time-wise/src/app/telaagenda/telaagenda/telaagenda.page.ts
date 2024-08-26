import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telaagenda',
  templateUrl: './telaagenda.page.html',
  styleUrls: ['./telaagenda.page.scss'],
})
export class TelaagendaPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPrincipal(){
    this.navPage.navigateBack("telaprincipal")
  }
}
