import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telapreviweb',
  templateUrl: './telapreviweb.page.html',
  styleUrls: ['./telapreviweb.page.scss'],
})
export class TelapreviwebPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPersonalizacao(){
    this.navPage.navigateBack("telapersonalizacao")
  }

  NavTelaVisualizarLink(){
    this.navPage.navigateForward("telavisualizarlink")
  }

}
