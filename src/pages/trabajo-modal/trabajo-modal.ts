import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Trabajo } from '../../models/jobs.mapping';


/**
 * Generated class for the TrabajoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
