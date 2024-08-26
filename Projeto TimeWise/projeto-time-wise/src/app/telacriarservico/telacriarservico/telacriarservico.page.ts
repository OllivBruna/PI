import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telacriarservico',
  templateUrl: './telacriarservico.page.html',
  styleUrls: ['./telacriarservico.page.scss'],
})
export class TelacriarservicoPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPersonalizacao(){
    this.navPage.navigateBack("telapersonalizacao")

}
}
