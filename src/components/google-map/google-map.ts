import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';

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
  puesto: string;
  numero: number;

  constructor(private modal:ModalController, private geolocation: Geolocation, private http: HttpClient, private network: Network) {
    this.infoWindows = [];
    this.trabajos = this.http.get<Trabajo[]>(this.jobsjson);
  }


  ngOnInit(){
    this.checkNetwork();
  	this.getLocation();
  }

  // Only check if there's no wifi connection 
  checkNetwork(){
    if(this.network.type=="none" || this.network.type=="unknown"){
      let informationString = "<h1>No se puede mostrar el mapa. Checa tu conexion a Internet</h1>";
      document.getElementById('map').innerHTML = informationString;
    }
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
    },(err : PositionError) => {
        console.log("error : " + err.message);
    });
  };

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
      title: 'Mi locacion',
      map: this.map
    });

    // Message displayed
    let myLocationInfo = new google.maps.InfoWindow({
      content: 'Mi locacion'
    });
    this.infoWindows.push(myLocationInfo);

    // And the listeners to open and close the infoWindow
    google.maps.event.addListener(myLocationMarker, 'click', () => {
      this.closeAllInfoWindows();
      myLocationInfo.open(this.map, myLocationMarker);
    });

    google.maps.event.addListener(this.map, 'click', () => {
      myLocationInfo.close();
    });

    // Load marker data and add markers
    this.addMarkerList();


  }

  private addMarkerList(){
    //Muestra marcadores al azar
    for(let i = 0; i < 60; i++){
      this.trabajos.subscribe(res => {
        let j = Math.floor((Math.random() * 100) + 1);
        this.crearMarcadores(res[j])
      })
    }
  }

  crearMarcadores(objetoTrabajo: Trabajo){
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': objetoTrabajo.direccion1}, (res, status) => {
      if (status === google.maps.GeocoderStatus.OK){
        let LatLng = new google.maps.LatLng(res[0].geometry.location.lat(), res[0].geometry.location.lng());
        let marker = new google.maps.Marker({
          position: LatLng,
          map: this.map
        });
        // Add content to the infoWindow - need to compile to angular for click to work
        let contentString = '<h5>'+objetoTrabajo.puesto+'</h5>'+
        '<button (click)="openModal('+objetoTrabajo+')">Informacion</button>';

        // Create info window and add it to the array
        let infoWindowJob = new google.maps.InfoWindow({
        content: contentString,
        });
        this.infoWindows.push(infoWindowJob);

        // Listener to close / open
        google.maps.event.addListener(marker, 'click', () => {
        this.closeAllInfoWindows();
        infoWindowJob.open(this.map, marker)
        });

        // close this specific infowindow
        google.maps.event.addListener(this.map, 'click', () => {
        infoWindowJob.close();
        })
      }
      else {
        console.log('No existe direccion')
      }
    });
  }

// // this closes all infoWindows stored so far
      closeAllInfoWindows() {
        for(let window of this.infoWindows) {
          window.close();
        }
  }

  // This code doesn't work yet. How to compile?
  // openModal(data: Trabajo[]){
  //   const trabajoModal = this.modal.create('TrabajoModalPage', {data: data});

  //   trabajoModal.present();
  // }

}
