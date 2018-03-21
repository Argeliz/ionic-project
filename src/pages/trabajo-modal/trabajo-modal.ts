import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }



}
