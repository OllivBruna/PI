import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navPage: NavController) {}

  NavTelaPrincipal(){
    this.navPage.navigateForward("telaprincipal")
  }

  NavTelaCadastrar1(){
    this.navPage.navigateForward("telacadastrar1")
  }


}
