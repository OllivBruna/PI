import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telacustomizarlink',
  templateUrl: './telacustomizarlink.page.html',
  styleUrls: ['./telacustomizarlink.page.scss'],
})
export class TelacustomizarlinkPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPrincipal(){
    this.navPage.navigateBack("telaprincipal")
  }

}
