import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telapersonalizacao',
  templateUrl: './telapersonalizacao.page.html',
  styleUrls: ['./telapersonalizacao.page.scss'],
})
export class TelapersonalizacaoPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPrincipal(){
    this.navPage.navigateForward("telaprincipal")
  }

  NavTelaDesignWeb(){
    this.navPage.navigateForward("teladesignweb")
  }

  NavTelaCriarServico(){
    this.navPage.navigateForward("telacriarservico")
  }
  
  NavTelaEditarServico(){
    this.navPage.navigateForward("telaeditarservico")
  }

  NavTelaPrevieWeb(){
    this.navPage.navigateForward("telapreviweb")
}

  NavTelaCadastrarFuncionario(){
    this.navPage.navigateForward("telacadastrarfuncionario")
}

}
