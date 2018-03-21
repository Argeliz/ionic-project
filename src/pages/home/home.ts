import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('map') mapElement;
	map:any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

	// ionViewDidLoad(){
	// 	this.getPosition();
	// }

	// getPosition(): void{
	// 	this.geolocation.getCurrentPosition()
	// 	.then(response => {
	// 		this.loadMap(response);
	// 	})
	// 	.catch(error =>{
	// 		console.log(error);
	// 	})
	// }

	// loadMap(position: Geoposition){
	// 	let latitude = position.coords.latitude;
	// 	let longitude = position.coords.longitude;
	// 	console.log(latitude, longitude);

	// // create a new map by passing HTMLElement
	// //	let mapEle: HTMLElement = document.getElementById('map');

	// // create LatLng object
	// 	let myLatLng = {lat: latitude, lng: longitude};

	// 	let map_div = this.mapElement.nativeElement;

	// 	let mapOptions = {
	// 		center: myLatLng,
	// 		zoom: 15
	// 	}

	// // create map
	// 	this.map = new google.maps.Map(map_div, mapOptions);

	// 	google.maps.event.addListenerOnce(this.map, 'idle', () => {
	// 			let marker = new google.maps.Marker({
	// 			position: myLatLng,
	// 			map: this.map,
	// 			title: 'Hello World!'
	// 			});
	// 		map_div.classList.add('show-map');
	// 	});
	// }
}