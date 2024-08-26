import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telaavaliacoes',
  templateUrl: './telaavaliacoes.page.html',
  styleUrls: ['./telaavaliacoes.page.scss'],
})
export class TelaavaliacoesPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPrincipal(){
    this.navPage.navigateBack("telaprincipal")
  }

}
