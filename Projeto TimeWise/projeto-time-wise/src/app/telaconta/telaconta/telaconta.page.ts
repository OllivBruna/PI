import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telaconta',
  templateUrl: './telaconta.page.html',
  styleUrls: ['./telaconta.page.scss'],
})
export class TelacontaPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPrincipal(){
    this.navPage.navigateBack("telaprincipal")
  }

}
