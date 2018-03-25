webpackJsonp([0],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajoModalPageModule", function() { return TrabajoModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajo_modal__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrabajoModalPageModule = (function () {
    function TrabajoModalPageModule() {
    }
    TrabajoModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trabajo_modal__["a" /* TrabajoModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trabajo_modal__["a" /* TrabajoModalPage */]),
            ],
        })
    ], TrabajoModalPageModule);
    return TrabajoModalPageModule;
}());

//# sourceMappingURL=trabajo-modal.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrabajoModalPage = (function () {
    function TrabajoModalPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.ionViewWillLoad();
    }
    TrabajoModalPage.prototype.ionViewWillLoad = function () {
        this.trabajo = this.navParams.get('data');
        console.log(this.trabajo);
    };
    TrabajoModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    TrabajoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabajo-modal',template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/pages/trabajo-modal/trabajo-modal.html"*/'<ion-header>\n    <ion-navbar color="light">\n      <ion-buttons left>\n        <button ion-button icon-only color="dark" (click)="closeModal()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>{{trabajo.puesto}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen elestic-header padding>\n<ion-grid padding>\n  <ion-row><h6 text-uppercase>Descripcion</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.descripcion}}</ion-row>\n  <ion-row><h6 text-uppercase>Requisitos</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.requisitos}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Organizacion</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.organizacion}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Estudios</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.estudios}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Sexo y Edad</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.sexo}}, {{trabajo.edad}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Horario</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.horario}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Jornada</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.jornada}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Sueldo</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.sueldo}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Contrato</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.contrato}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Direccion</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.direccion1}}, {{trabajo.direccion2}}</ion-row>\n  <ion-row text-left><h6 text-uppercase>Contacto</h6></ion-row>\n  <ion-row margin-bottom text-left>{{trabajo.contacto}}</ion-row>\n\n  <ion-row text-left><h6 text-uppercase>Telefono</h6></ion-row>\n  <ion-row margin-bottom text-left><a [href]="\'tel:\' + trabajo.telefono">{{trabajo.telefono}}</a></ion-row>\n\n  <ion-row text-left><h6 text-uppercase>Correo electrónico</h6></ion-row>\n  <ion-row margin-bottom text-left><a [href]="\'mailto:\' + trabajo.email">{{trabajo.email}}</a></ion-row>\n\n  <ion-row text-left><h6 text-uppercase>Sitio web</h6></ion-row>\n  <ion-row text-left><a [href]="trabajo.web">{{trabajo.web}}</a></ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/pages/trabajo-modal/trabajo-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], TrabajoModalPage);
    return TrabajoModalPage;
}());

//# sourceMappingURL=trabajo-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map