import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Trabajo } from '../../models/jobs.mapping';
import { Observable } from 'rxjs/Rx';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  jobsjson: string = 'assets/json/jobs.json';
  trabajos: Observable<Trabajo[]>;
  filter: any = { puesto: '' };

  constructor(public navCtrl: NavController, private modal:ModalController, private http: HttpClient, private loadingCtrl:LoadingController) {
    this.getJobs();
  }

  ionViewWillLoad(){
    this.presentLoading();    
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando lista de trabajos",
      duration: 700
    });
    loader.present();
  }

  getJobs(){
    this.trabajos = this.http.get<Trabajo[]>(this.jobsjson)
  }

  // This sends the the data to the modal 
  openModal(data: Trabajo[]){
    const trabajoModal = this.modal.create('TrabajoModalPage', {data: data});

    trabajoModal.present();
  }         

}
