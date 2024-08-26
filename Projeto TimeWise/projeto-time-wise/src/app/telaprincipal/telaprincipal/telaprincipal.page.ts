import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telaprincipal',
  templateUrl: './telaprincipal.page.html',
  styleUrls: ['./telaprincipal.page.scss'],
})
export class TelaprincipalPage implements OnInit {

  public appPages = [
    { title: 'Menu', url: '/telamenu', icon: 'home' },
    // Adicione mais páginas conforme necessário
  ];


  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaHome() {
    this.navPage.navigateBack("home")
  }

  NavAgenda(){
    this.navPage.navigateForward("telaagenda")
  }

  NavAvaliacoes() {
    this.navPage.navigateForward("telaavaliacoes")
  }

  NavPersonalizacao(){
    this.navPage.navigateForward("telapersonalizacao")
  }

  NavHorarios(){
    this.navPage.navigateForward("telahorarios")
  }

  NavSuporte(){
    this.navPage.navigateForward("telasuporte")
  }
}