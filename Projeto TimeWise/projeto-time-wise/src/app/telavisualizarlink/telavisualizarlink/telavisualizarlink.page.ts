import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telavisualizarlink',
  templateUrl: './telavisualizarlink.page.html',
  styleUrls: ['./telavisualizarlink.page.scss'],
})
export class TelavisualizarlinkPage implements OnInit {

  constructor(private navPage: NavController) { }

  ngOnInit() {
  }

  VoltarTelaPreviweb(){
    this.navPage.navigateBack("telapreviweb")
  }

}
