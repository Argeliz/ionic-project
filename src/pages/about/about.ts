import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TrabajosDataProvider } from '../../providers/trabajos-data/trabajos-data';
import { Trabajo } from '../../models/jobs.mapping';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  jobsjson: string = 'https://feed.grep.sr/json/0329Tw7';
  trabajos: Observable<Trabajo[]>;

  constructor(public navCtrl: NavController, private modal:ModalController, private http: HttpClient) {
    this.getJobs();
  }

  getJobs(){
    this.trabajos = this.http.get<Trabajo[]>(this.jobsjson)
  }

  openModal(trabajo: Trabajo[]){
    const trabajoModal = this.modal.create('TrabajoModalPage', {data: trabajo});

    trabajoModal.present();
  }

}
