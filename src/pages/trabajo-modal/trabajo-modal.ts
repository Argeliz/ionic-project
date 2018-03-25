import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Trabajo } from '../../models/jobs.mapping';

@IonicPage()
@Component({
  selector: 'page-trabajo-modal',
  templateUrl: 'trabajo-modal.html',
})
export class TrabajoModalPage {

  trabajo: Trabajo[];

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.ionViewWillLoad();
  }
  
  ionViewWillLoad() {
    this.trabajo = this.navParams.get('data');
    console.log(this.trabajo);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
