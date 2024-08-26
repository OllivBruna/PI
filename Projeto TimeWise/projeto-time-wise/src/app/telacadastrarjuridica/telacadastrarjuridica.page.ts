import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telacadastrarjuridica',
  templateUrl: './telacadastrarjuridica.page.html',
  styleUrls: ['./telacadastrarjuridica.page.scss'],
})
export class TelacadastrarjuridicaPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaHome(){
    this.navPage.navigateBack("home")
  }

}
