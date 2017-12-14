import { BdProvider } from './../../providers/bd/bd';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public list:any[]=[];
  public message:any;
  constructor(public navCtrl: NavController,public horarioProv: BdProvider) {
    // this.list=this.horarioProv.list;
  }
  dimeMensaje(){
    console.log('a');
    // this.message=this.horarioProv.message;
  }

}
