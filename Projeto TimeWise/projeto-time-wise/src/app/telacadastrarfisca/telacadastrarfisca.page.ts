import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telacadastrarfisca',
  templateUrl: './telacadastrarfisca.page.html',
  styleUrls: ['./telacadastrarfisca.page.scss'],
})
export class TelacadastrarfiscaPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaHome(){
    this.navPage.navigateBack("home")
  }

}
