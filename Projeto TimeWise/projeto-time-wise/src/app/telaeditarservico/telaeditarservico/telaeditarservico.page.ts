import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telaeditarservico',
  templateUrl: './telaeditarservico.page.html',
  styleUrls: ['./telaeditarservico.page.scss'],
})
export class TelaeditarservicoPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPersonalizacao(){
    this.navPage.navigateBack("telapersonalizacao")
  }


}
