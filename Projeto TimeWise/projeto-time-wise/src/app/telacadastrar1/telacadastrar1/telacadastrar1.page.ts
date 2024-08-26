import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telacadastrar1',
  templateUrl: './telacadastrar1.page.html',
  styleUrls: ['./telacadastrar1.page.scss'],
})
export class Telacadastrar1Page implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }
  VoltarTelaHome(){
    this.navPage.navigateBack("home")
  }

  SalvarEmail(){
  }

  PessoaJuridica(){
    this.navPage.navigateForward("telacadastrarjuridica")
  }

  PessoaFisica(){
    this.navPage.navigateForward("telacadastrarfisca")
  }
}
