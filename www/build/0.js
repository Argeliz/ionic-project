webpackJsonp([0],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajoModalPageModule", function() { return TrabajoModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajo_modal__ = __webpack_require__(286);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trabajo_modal__["a" /* TrabajoModalPage */]),
            ],
        })
    ], TrabajoModalPageModule);
    return TrabajoModalPageModule;
}());

//# sourceMappingURL=trabajo-modal.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajoModalPage; });
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


/**
 * Generated class for the TrabajoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrabajoModalPage = (function () {
    function TrabajoModalPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    TrabajoModalPage.prototype.ionViewWillLoad = function () {
        var data = this.navParams.get('trabajo');
        console.log(data);
    };
    TrabajoModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    TrabajoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabajo-modal',template:/*ion-inline-start:"/home/argeliz/Ionic/tabs/src/pages/trabajo-modal/trabajo-modal.html"*/'<!--\n  Generated template for the TrabajoModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button (click)="closeModal()" ion-button icon-only start>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    <ion-title>TEST</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen elestic-header>\nTEST\n<!-- <ion-row>\n  <h2>Descripcion</h2>\n  <p>{{trabajo.descripcion}}</p>\n</ion-row>\n<ion-row>\n  <h2>Requisitos</h2>\n  <p>{{trabajo.requisitos}}</p>\n</ion-row>\n<ion-row>{{trabajo.area}}</ion-row>\n<ion-row>{{trabajo.organizacion}}</ion-row>\n<ion-row>{{trabajo.contrato}}</ion-row>\n<ion-row>{{trabajo.estudios}}</ion-row>\n<ion-row>{{trabajo.turno}}</ion-row>\n<ion-row>{{trabajo.sexo}}</ion-row>\n<ion-row>{{trabajo.edad}}</ion-row>\n<ion-row>{{trabajo.horario}}</ion-row>\n<ion-row>{{trabajo.jornada}}</ion-row>\n<ion-row>{{trabajo.sueldo}}</ion-row>\n<ion-row>{{trabajo.contacto}}</ion-row>\n<ion-row>{{trabajo.telefono}}</ion-row>\n<ion-row>{{trabajo.direccion1}} ,{{trabajo.direccion2}}</ion-row>\n<ion-row>{{trabajo.web}}</ion-row>\n<ion-row>{{trabajo.fecha}}</ion-row> -->\n</ion-content>\n'/*ion-inline-end:"/home/argeliz/Ionic/tabs/src/pages/trabajo-modal/trabajo-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], TrabajoModalPage);
    return TrabajoModalPage;
}());

//# sourceMappingURL=trabajo-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map