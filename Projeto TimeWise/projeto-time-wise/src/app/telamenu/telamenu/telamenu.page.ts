import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telamenu',
  templateUrl: './telamenu.page.html',
  styleUrls: ['./telamenu.page.scss'],
})
export class TelamenuPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPrincipal(){
    this.navPage.navigateBack("telaprincipal")
}

  NavTelaConta(){
    this.navPage.navigateForward("telaconta")
  }

  NavTelaCustomizar(){
    this.navPage.navigateForward("telacustomizarlink")
  }
}

