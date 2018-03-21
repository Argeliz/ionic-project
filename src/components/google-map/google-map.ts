import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

// Job model
import { Trabajo } from '../../models/jobs.mapping';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  options: GeolocationOptions;
  currentPos: Geoposition;
	@ViewChild('map') mapElement;
  map:any;
  infoWindows: any;
  marcadores:Array<any>;
  trabajos: Observable<Trabajo[]>;
  jobsjson: string = 'assets/json/jobs.json';

  constructor(private alertCtrl: AlertController, private geolocation: Geolocation, private http: HttpClient) {
    this.infoWindows = [];
    this.trabajos = this.http.get<Trabajo[]>(this.jobsjson);
  }

  ngOnInit(){
  	this.getLocation();
  }

  // Obtain coordinates
  getLocation(){

    this.options = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
      this.currentPos = pos;      
      console.log(pos);
      this.loadMap(pos.coords.latitude, pos.coords.longitude);
    },(err : PositionError)=>{
        console.log("error : " + err.message);
    });
  }

  // Load map after obtaining the coordinates
    loadMap(lat,long){
      let latLng = new google.maps.LatLng(lat, long);
      let mapOptions = {
        center: latLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // Create map 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Create marker for my location
    let myLocationMarker = new google.maps.Marker({
      position: latLng,
      title: 'Mi casa',
      map: this.map
    })

    // Message displayed
    let myLocationInfo = new google.maps.InfoWindow({
      content: 'Mi casa'
    });
    this.infoWindows.push(myLocationInfo);

    // And the listeners to open and close the infoWindow
    google.maps.event.addListener(myLocationMarker, 'click', () => {
      this.closeAllInfoWindows();
      myLocationInfo.open(this.map, myLocationMarker);
    });

    google.maps.event.addListener(this.map, 'click', () => {
      myLocationInfo.close();
    })

    // Load marker data and add markers
      this.addMarkerList()


  }

  private addMarkerList(){
    // For para iterar por i y mostar datos de acuerdo al i 
    let direccion: string;
    for(let i = 0; i < 50; i++){
      this.trabajos.subscribe(res => {
        let j = Math.floor((Math.random() * 100) + 1);
        direccion = res[j].direccion1;
        this.getLatLng(direccion)
      })
    }

  // //   // Create the marker
  // //   let marker = new google.maps.Marker({
  // //     position: markerPosition,
  // //     icon: markerIcon,
  // //     title: trabajo.title,
  // //     map: this.map
  // //   });

  // //   // Add content to the infoWindow
  // //   let contentString = '<h5>'+trabajo.title+'</h5>'+
  // //                       '<h6>'+trabajo.description+'</h6>'+
  // //                       '<button (click)="testAlert()">Click me</button>';


  // //   // Create info window and add it to the array
  // //   let infoWindowJob = new google.maps.InfoWindow({
  // //     content: contentString,
  // //   });
  // //   this.infoWindows.push(infoWindowJob);

  // //   // Listener to close / open
  // //   google.maps.event.addListener(marker, 'click', () => {
  // //     this.closeAllInfoWindows();
  // //     infoWindowJob.open(this.map, marker)
  // //   });
    
  // //   // close this specific infowindow
  // //   google.maps.event.addListener(this.map, 'click', () => {
  // //     infoWindowJob.close();
  // //   })
  }

  getLatLng(direccion: string){
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': direccion}, (res, status) => {
      if (status === google.maps.GeocoderStatus.OK){
        let LatLng = new google.maps.LatLng(res[0].geometry.location.lat(), res[0].geometry.location.lng());
        this.addMarkers(LatLng);
      }
      else {
        console.log('No existe direccion')
      }
    });
  }

  addMarkers(latlng){
          // Create the marker
      let marker = new google.maps.Marker({
        position: latlng,
        title: 'test',
        map: this.map
      });
  }

  // // this closes all infoWindows stored so far
        closeAllInfoWindows() {
          for(let window of this.infoWindows) {
            window.close();
          }
  }

  // addMarkersfromJson(){
  //   let geocoder = new google.maps.Geocoder();  
  //   this.trabajosData.getJobs().subscribe(data => this.trabajos = data);

  //   // this.trabajos.forEach(element => {
  //   //   console.log(this.trabajos['puesto'])
  //   // });
  //   }
}
