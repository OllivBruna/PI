import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-teladesignweb',
  templateUrl: './teladesignweb.page.html',
  styleUrls: ['./teladesignweb.page.scss'],
})
export class TeladesignwebPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPersonalizacao(){
    this.navPage.navigateBack("telapersonalizacao")
  }

}
