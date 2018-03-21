import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Trabajo } from '../../models/jobs.mapping';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the TrabajosDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrabajosDataProvider {

  // jobsjson: string = 'https://api.grep.sr//v1/report/dataset?report_id=30691&history_id=1720734&limit=10&start_index=1&sheet=dataset&x-api-key=ff118e673063450fafccd12af86bea8d';
  jobsjson: string = 'https://feed.grep.sr/json/0329Tw7';
  trabajos: Observable<Trabajo[]>;

  constructor(private http: HttpClient) {
    console.log('Hello TrabajosDataProvider Provider');
  }

  getJobs(){
    return this.http.get<Trabajo[]>(this.jobsjson)
  }
}
