import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Trabajo } from '../../models/jobs.mapping';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  jobsjson: string = 'assets/json/jobs.json';
  trabajos: Observable<Trabajo[]>;

  constructor(public navCtrl: NavController, private modal:ModalController, private http: HttpClient) {
    this.getJobs();
  }

  getJobs(){
    this.trabajos = this.http.get<Trabajo[]>(this.jobsjson)
  }

  openModal(data: Trabajo[]){
    const trabajoModal = this.modal.create('TrabajoModalPage', {data: data});

    trabajoModal.present();
  }

}
