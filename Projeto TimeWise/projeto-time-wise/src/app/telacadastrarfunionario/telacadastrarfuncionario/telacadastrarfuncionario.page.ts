import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telacadastrarfuncionario',
  templateUrl: './telacadastrarfuncionario.page.html',
  styleUrls: ['./telacadastrarfuncionario.page.scss'],
})
export class TelacadastrarfuncionarioPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPersonalizacao(){
    this.navPage.navigateBack("telapersonalizacao") 
  }

}
