import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telasuporte',
  templateUrl: './telasuporte.page.html',
  styleUrls: ['./telasuporte.page.scss'],
})
export class TelasuportePage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPrincipal(){
    this.navPage.navigateBack("telaprincipal")

}
}