webpackJsonp([1],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/trabajo-modal/trabajo-modal.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="ios-pin-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="ios-list-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="ios-person-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, modal, http) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.http = http;
        this.jobsjson = 'https://feed.grep.sr/json/0329Tw7';
        this.getJobs();
    }
    AboutPage.prototype.getJobs = function () {
        this.trabajos = this.http.get(this.jobsjson);
    };
    AboutPage.prototype.openModal = function (trabajo) {
        var trabajoModal = this.modal.create('TrabajoModalPage', { data: trabajo });
        trabajoModal.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/pages/about/about.html"*/'<ion-header>\n	<expandable-header [scrollArea]="contenido" headerHeight="125">\n	  <ion-item>\n		  <ion-label><ion-icon name="search"></ion-icon></ion-label>\n		  <ion-input type="text"></ion-input>\n	  </ion-item>\n  \n	  <ion-item>\n		  <ion-label><ion-icon name="funnel"></ion-icon></ion-label>\n		  <ion-input type="text"></ion-input>\n	  </ion-item>\n	</expandable-header>\n	<ion-navbar color="primary">\n	  <ion-title>Lista de empleos</ion-title>\n	</ion-navbar>\n  \n  </ion-header>\n	<!-- Datos a mostrar:\n		imagen, puesto, fecha, organizacion, \n		descripcion, area, direccion\n	-->\n<ion-content fullscreen #contenido>\n	<ion-list >\n		<button ion-item *ngFor="let trabajo of trabajos | async; let i = index" (click)="openModal(trabajo)">\n			<ion-row>\n				<ion-col col-4>\n					<img src="{{trabajo.imagen}}">\n				</ion-col>\n				<ion-col col-8>\n					<h2>{{trabajo.puesto}}</h2>\n					<p>{{trabajo.fecha}}</p>\n					<p>{{trabajo.direccion1}}</p>\n					<p>{{trabajo.jornada}}</p>\n					<p>{{trabajo.turno}}</p>\n					<p>{{i}}</p>\n				</ion-col>\n			</ion-row>\n		</button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/pages/home/home.html"*/'<ion-content>\n	<google-map></google-map>\n</ion-content>\n'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_google_map_google_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_expandable_header_expandable_header__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_trabajos_data_trabajos_data__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_google_map_google_map__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_expandable_header_expandable_header__["a" /* ExpandableHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/trabajo-modal/trabajo-modal.module#TrabajoModalPageModule', name: 'TrabajoModalPage', segment: 'trabajo-modal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_trabajos_data_trabajos_data__["a" /* TrabajosDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleMapComponent = (function () {
    function GoogleMapComponent(alertCtrl, geolocation, http) {
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.jobsjson = 'https://feed.grep.sr/json/0329Tw7';
        this.infoWindows = [];
        this.trabajos = this.http.get(this.jobsjson);
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.getLocation();
    };
    // Obtain coordinates
    GoogleMapComponent.prototype.getLocation = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            _this.loadMap(pos.coords.latitude, pos.coords.longitude);
        }, function (err) {
            console.log("error : " + err.message);
        });
    };
    // Load map after obtaining the coordinates
    GoogleMapComponent.prototype.loadMap = function (lat, long) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // Create map 
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // Create marker for my location
        var myLocationMarker = new google.maps.Marker({
            position: latLng,
            title: 'Mi casa',
            map: this.map
        });
        // Message displayed
        var myLocationInfo = new google.maps.InfoWindow({
            content: 'Mi casa'
        });
        this.infoWindows.push(myLocationInfo);
        // And the listeners to open and close the infoWindow
        google.maps.event.addListener(myLocationMarker, 'click', function () {
            _this.closeAllInfoWindows();
            myLocationInfo.open(_this.map, myLocationMarker);
        });
        google.maps.event.addListener(this.map, 'click', function () {
            myLocationInfo.close();
        });
        // Load marker data and add markers
        this.addMarkerList();
    };
    GoogleMapComponent.prototype.addMarkerList = function () {
        var _this = this;
        // For para iterar por i y mostar datos de acuerdo al i 
        var direccion;
        for (var i = 0; i < 40; i++) {
            this.trabajos.subscribe(function (res) {
                var j = Math.floor((Math.random() * 100) + 1);
                direccion = res[j].direccion1;
                _this.getLatLng(direccion);
            });
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
    };
    GoogleMapComponent.prototype.getLatLng = function (direccion) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': direccion }, function (res, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var LatLng = new google.maps.LatLng(res[0].geometry.location.lat(), res[0].geometry.location.lng());
                _this.addMarkers(LatLng);
            }
            else {
                console.log('No existe direccion');
            }
        });
    };
    GoogleMapComponent.prototype.addMarkers = function (latlng) {
        // Create the marker
        var marker = new google.maps.Marker({
            position: latlng,
            title: 'test',
            map: this.map
        });
    };
    // // this closes all infoWindows stored so far
    GoogleMapComponent.prototype.closeAllInfoWindows = function () {
        for (var _i = 0, _a = this.infoWindows; _i < _a.length; _i++) {
            var window_1 = _a[_i];
            window_1.close();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "mapElement", void 0);
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'google-map',template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/components/google-map/google-map.html"*/'<div #map id="map">\n</div>\n'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/components/google-map/google-map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ExpandableHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExpandableHeaderComponent = (function () {
    function ExpandableHeaderComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello ExpandableHeaderComponent Component');
    }
    ExpandableHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeaderComponent.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            for (var _i = 0, _a = _this.element.nativeElement.children; _i < _a.length; _i++) {
                var headerElement = _a[_i];
                var totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                if (totalHeight > _this.newHeaderHeight && !headerElement.isHidden) {
                    headerElement.isHidden = true;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0');
                }
                else if (totalHeight <= _this.newHeaderHeight && headerElement.isHidden) {
                    headerElement.isHidden = false;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0.7');
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ExpandableHeaderComponent.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ExpandableHeaderComponent.prototype, "headerHeight", void 0);
    ExpandableHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expandable-header',template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/components/expandable-header/expandable-header.html"*/'<!-- Generated template for the ExpandableHeaderComponent component -->\n<ng-content></ng-content>'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/components/expandable-header/expandable-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ExpandableHeaderComponent);
    return ExpandableHeaderComponent;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajosDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TrabajosDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TrabajosDataProvider = (function () {
    function TrabajosDataProvider(http) {
        this.http = http;
        // jobsjson: string = 'https://api.grep.sr//v1/report/dataset?report_id=30691&history_id=1720734&limit=10&start_index=1&sheet=dataset&x-api-key=ff118e673063450fafccd12af86bea8d';
        this.jobsjson = 'https://feed.grep.sr/json/0329Tw7';
        console.log('Hello TrabajosDataProvider Provider');
    }
    TrabajosDataProvider.prototype.getJobs = function () {
        return this.http.get(this.jobsjson);
    };
    TrabajosDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TrabajosDataProvider);
    return TrabajosDataProvider;
}());

//# sourceMappingURL=trabajos-data.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map