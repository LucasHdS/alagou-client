webpackJsonp([4],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/lucas/projects/alagou/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  class="header">\n  <ion-navbar transparent>\n    <div class="title"><p>Alagou!</p></div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n      <ul>\n          <li class="types-container">\n              <h1>Tipos</h1>\n              <span>\n                <img src="../../assets/icon/alagamentoLivre.png"/>\n                <img src="../../assets/icon/alagamentoModerado.png"/>\n                <img src="../../assets/icon/alagamentoCritico.png"/>\n                <h2>Alagamento</h2>\n              </span>\n              <br/>\n              <span>\n                  <p>É o acúmulo de água nas ruas por problemas de drenagem, sem tranbordamento de canais ou algo do tipo</p>\n              </span>\n              <span>\n                <img src="../../assets/icon/inundacaoLivre.png"/>\n                <img src="../../assets/icon/inundacaoModerado.png"/>\n                <img src="../../assets/icon/inundacaoCritico.png"/>\n                <h2>Inundação</h2>\n                </span>\n                <br/>\n                <span>\n                    <p>É o transbordamento das águas dos canais de drenagem.</p>\n                </span>  \n                <span>\n                    <img src="../../assets/icon/enxurrada.png"/>\n                    <h2>Enxurrada</h2>\n                </span>\n                <br/>\n                <span>\n                    <p>Parecido com alagamento e inundação, mas com água em movimento. Qualquer ponto deste tipo é crítico.</p>\n                </span>\n        </li>\n        <li class="levels-container">\n            <ul>\n                <li>\n                <h1>Níveis</h1>    \n                <span>\n                    <img src="../../assets/icon/alagamentoLivre.png"/>\n                    <img src="../../assets/icon/inundacaoLivre.png"/>\n                    <h2>Não preocupante</h2>\n                </span>\n                <br/>\n                    <span>\n                    <p>\n                        Existe um inicio de acúmulo, porém ainda é possivel a passagem de pedestre nas calçadas.\n                        Não molha o sapato, mas tem que passar na ponta do pé.\n                    </p>\n                    </span>\n                </li>\n                <li>\n                <span>\n                    <img src="../../assets/icon/alagamentoModerado.png"/>\n                    <img src="../../assets/icon/inundacaoModerado.png"/>\n                    <h2>Moderado</h2>\n                </span>\n                <br/>\n                <span>\n                    <p>\n                        Neste nível, a canela já está molhada, e os carros passam jogando água no pedestre.       \n                    </p>\n                </span>\n                </li>\n                <li>\n                <span>\n                    <img src="../../assets/icon/alagamentoCritico.png"/>\n                    <img src="../../assets/icon/inundacaoCritico.png"/>\n                    <h2>Crítico</h2>\n                </span>\n                <br/>\n                <span>\n                    <p>A pé não dá pra passar, de carro... o último que tentou parou no meio. Tudo parado, niguém passa por este local.</p>\n                </span>\n                </li>\n            </ul>\n          </li>\n      </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lucas/projects/alagou/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_flood_point_create_flood_point__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flood_point_details_flood_point_details__ = __webpack_require__(87);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.createFloodPointPage = __WEBPACK_IMPORTED_MODULE_3__create_flood_point_create_flood_point__["a" /* CreateFloodPointPage */];
        this.floodPointsDetailsPage = __WEBPACK_IMPORTED_MODULE_4__flood_point_details_flood_point_details__["a" /* FloodPointDetailsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/lucas/projects/alagou/src/pages/tabs/tabs.html"*/'<ion-tabs class="tab">\n  <ion-tab tabIcon="water" tabTitle="Visulizar Pontos" [root]="homePage"></ion-tab>\n  <ion-tab tabIcon="md-information-circle" tabTitle="Classificações e Níveis" [root]="aboutPage"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/lucas/projects/alagou/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 180:
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
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		443,
		3
	],
	"../pages/create-flood-point/create-flood-point.module": [
		444,
		2
	],
	"../pages/flood-point-details/flood-point-details.module": [
		445,
		1
	],
	"../pages/tabs/tabs.module": [
		446,
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
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_points_points__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation_ngx__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id_ngx__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps_ngx__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flood_point_details_flood_point_details__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_flood_point_create_flood_point__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl, geolocation, uniqueDeviceID, pointsProvider, toastController, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.uniqueDeviceID = uniqueDeviceID;
        this.pointsProvider = pointsProvider;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.splash = true;
        this.points = [];
        this.tabBarElement = document.querySelector('.tabbar');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tabBarElement.style.display = 'none';
        setTimeout(function () {
            _this.splash = false;
            _this.tabBarElement.style.display = 'flex';
        }, 4000);
        this.loadMap();
        this.uniqueDeviceID.get()
            .then(function (uuid) { return _this.uuid = uuid; })
            .catch(function (error) { return console.log(error); });
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var mapOptions = {
                camera: {
                    target: {
                        lat: resp.coords.latitude,
                        lng: resp.coords.longitude
                    },
                    zoom: 15,
                    tilt: 0
                },
                icon: {
                    url: "../../assets/icon/baseline_person_pin_black_48dp.png",
                    size: {
                        width: 32,
                        height: 32
                    }
                },
                controls: {
                    mapToolbar: false,
                    myLocation: true,
                    myLocationButton: true,
                }
            };
            _this.map = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps_ngx__["b" /* GoogleMaps */].create('map_canvas', mapOptions);
            _this.circle = _this.map.addCircleSync({
                center: {
                    lat: resp.coords.latitude,
                    lng: resp.coords.longitude
                },
                radius: 50,
                strokeColor: '#FFFFFF',
                strokeWidth: 0,
                fillColor: 'rgba(50,224,68,0.3)',
                clickable: true
            });
            _this.circle.on(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps_ngx__["c" /* GoogleMapsEvent */].CIRCLE_CLICK).subscribe(function (e) {
                var lat = e[0].lat;
                var lng = e[0].lng;
                var createFloodPointModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__create_flood_point_create_flood_point__["a" /* CreateFloodPointPage */], { lat: lat, lng: lng, uuid: _this.uuid });
                createFloodPointModal.onDidDismiss(function (data) {
                    //console.log(data);
                    _this.tabBarElement.style.display = 'flex';
                    if (data != null) {
                        var criticoAlagamentoIcon = {
                            url: "assets/icon/alagamentoCritico.png",
                            size: {
                                width: 32,
                                height: 32
                            }
                        };
                        var moderadoAlagamentoIcon = {
                            url: "assets/icon/alagamentoLivre.png",
                            size: {
                                width: 32,
                                height: 32
                            }
                        };
                        var preocupanteAlagamentoIcon = {
                            url: "assets/icon/alagamentoModerado.png",
                            size: {
                                width: 32,
                                height: 32
                            }
                        };
                        var criticoInundacaoIcon = {
                            url: "assets/icon/inundacaoCritico.png",
                            size: {
                                width: 32,
                                height: 32
                            }
                        };
                        var moderadoInundacaoIcon = {
                            url: "assets/icon/inundacaoLivre.png",
                            size: {
                                width: 32,
                                height: 32
                            }
                        };
                        var preocupanteInundacaIcon = {
                            url: "assets/icon/inundacaoModerado.png",
                            size: {
                                width: 32,
                                height: 32
                            }
                        };
                        var enxurradaIcon = {
                            url: "assets/icon/enxurrada.png",
                            size: {
                                width: 32,
                                height: 32
                            }
                        };
                        if (data.level.toLowerCase() == "critico") {
                            if (data.type.toLowerCase() == "alagamento") {
                                _this.addMarker(criticoAlagamentoIcon, data);
                            }
                            else if (data.type.toLowerCase() == "inundacao") {
                                _this.addMarker(criticoInundacaoIcon, data);
                            }
                        }
                        else if (data.level.toLowerCase() == "moderado") {
                            if (data.type.toLowerCase() == "alagamento") {
                                _this.addMarker(moderadoAlagamentoIcon, data);
                            }
                            else if (data.type.toLowerCase() == "inundacao") {
                                _this.addMarker(moderadoInundacaoIcon, data);
                            }
                        }
                        else if ("preocupante") {
                            if (data.type.toLowerCase() == "alagamento") {
                                _this.addMarker(preocupanteAlagamentoIcon, data);
                            }
                            else if (data.type.toLowerCase() == "inundacao") {
                                _this.addMarker(preocupanteInundacaIcon, data);
                            }
                        }
                        else {
                            _this.addMarker(enxurradaIcon, data);
                        }
                    }
                });
                _this.pointsProvider.getUserPoints(_this.uuid)
                    .then(function (result) {
                    if (result > 2) {
                        createFloodPointModal.present();
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Seu ponto já foi registrado. Obrigado!',
                            subTitle: 'Você já registrou um ponto nos ultimos 2 minutos, a comunidade agradece pela sua contribuição!',
                            buttons: ['OK']
                        });
                        alert_1.present();
                    }
                })
                    .catch(function (error) {
                    if (error == 0) {
                        createFloodPointModal.present();
                    }
                    else {
                        Object(__WEBPACK_IMPORTED_MODULE_8_rxjs__["throwError"])(error);
                    }
                });
            });
            _this.fillFloodPoints()
                .then(function (result) {
                var markerCluster = _this.map.addMarkerClusterSync({
                    boundsDraw: false,
                    markers: _this.points,
                    icons: [
                        {
                            min: 500,
                            url: '../../assets/icon/water-drop.png'
                        }
                    ]
                });
                markerCluster.on(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps_ngx__["c" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function (params) {
                    console.log('chegou');
                    var marker = params[1];
                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__flood_point_details_flood_point_details__["a" /* FloodPointDetailsPage */], { id: marker.get('id') });
                    modal.present();
                });
            })
                .catch(function (error) {
                _this.toastController.create({ message: 'Erro ao listar pontos de alagamento. Erro: ' + error, position: 'bottom', duration: 3000 }).present();
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log('Erro getting location', JSON.stringify(error));
            alert("Erro ao capturar sua posição. Por favor verifique se deu permissão ap aplicativo");
        });
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps_ngx__["a" /* Environment */].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBgdw5bTUGo_wMXruO-5jZqKJvOMZGMGM8',
            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBgdw5bTUGo_wMXruO-5jZqKJvOMZGMGM8'
        });
    };
    HomePage.prototype.addMarker = function (icon, data) {
        var marker = this.map.addMarkerSync({
            icon: icon,
            animation: 'DROP',
            position: {
                lat: data.lat,
                lng: data.lng
            },
            id: data.id,
            deviceID: data.deviceID,
            confirmations: data.confirmations
        });
        marker.showInfoWindow();
    };
    // private hasPoint(): boolean{
    //   let aux: boolean;
    //   this.pointsProvider.getUserPoints(this.uuid)
    //   .then((result) => {
    //     if(result < 60){
    //       aux = true;
    //       return aux;
    //     }
    //     else
    //     {
    //       aux = false;
    //       return aux;
    //     }
    //   })
    //   .catch((error) => {  
    //     if(error == 0){
    //       aux = false;
    //       return aux;
    //     }else{
    //       throwError(error);
    //     }
    //   })
    //   return aux;
    // }
    HomePage.prototype.fillFloodPoints = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pointsProvider.getFloodPoints()
                .then(function (result) {
                console.log(result);
                var criticoAlagamentoIcon = {
                    url: "assets/icon/alagamentoCritico.png",
                    size: {
                        width: 32,
                        height: 32
                    }
                };
                var moderadoAlagamentoIcon = {
                    url: "assets/icon/alagamentoLivre.png",
                    size: {
                        width: 32,
                        height: 32
                    }
                };
                var preocupanteAlagamentoIcon = {
                    url: "assets/icon/alagamentoModerado.png",
                    size: {
                        width: 32,
                        height: 32
                    }
                };
                var criticoInundacaoIcon = {
                    url: "assets/icon/inundacaoCritico.png",
                    size: {
                        width: 32,
                        height: 32
                    }
                };
                var moderadoInundacaoIcon = {
                    url: "assets/icon/inundacaoLivre.png",
                    size: {
                        width: 32,
                        height: 32
                    }
                };
                var preocupanteInundacaIcon = {
                    url: "assets/icon/inundacaoModerado.png",
                    size: {
                        width: 32,
                        height: 32
                    }
                };
                var enxurradaIcon = {
                    url: "assets/icon/enxurrada.png",
                    size: {
                        width: 32,
                        height: 32
                    }
                };
                result.forEach(function (floodPoint) {
                    console.log(floodPoint);
                    var today = new Date(Date.now());
                    var updatedAt = new Date(floodPoint.updatedAt);
                    var datediffUpdate = today.valueOf() - updatedAt.valueOf();
                    var updateTime = Math.floor((datediffUpdate / 1000 / 60) << 0);
                    console.log(floodPoint.type);
                    if (floodPoint.level == "critico") {
                        if (floodPoint.type == "alagamento") {
                            _this.icon = criticoAlagamentoIcon;
                        }
                        else if (floodPoint.type == "inundacao") {
                            _this.icon = criticoInundacaoIcon;
                        }
                    }
                    else if (floodPoint.level == "moderado") {
                        if (floodPoint.type == "alagamento") {
                            _this.icon = moderadoAlagamentoIcon;
                        }
                        else if (floodPoint.type == "inundacao") {
                            _this.icon = moderadoInundacaoIcon;
                        }
                    }
                    else if (floodPoint.level == "preocupante") {
                        if (floodPoint.type == "alagamento") {
                            _this.icon = preocupanteAlagamentoIcon;
                        }
                        else if (floodPoint.type == "inundacao") {
                            _this.icon = preocupanteInundacaIcon;
                        }
                    }
                    else {
                        _this.icon = enxurradaIcon;
                    }
                    if (updateTime < 5) {
                        if (floodPoint.confirmations > -5) {
                            var point = {
                                position: {
                                    lat: floodPoint.lat,
                                    lng: floodPoint.lng
                                },
                                id: floodPoint._id,
                                icon: _this.icon
                            };
                            _this.points.push(point);
                        }
                    }
                    resolve(_this.points);
                });
            })
                .catch(function (error) {
                reject(error);
                _this.toastController.create({ message: 'Erro na requisição. Erro: ' + error.error, position: 'bottom', duration: 3000 }).present();
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/lucas/projects/alagou/src/pages/home/home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <div id=\'splash-title\' class=\'title\'><p>Alagou!</p></div>    \n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n<ion-header  class="header">\n  <ion-navbar transparent>\n    <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;" class="title">\n      <p>Alagou!</p>\n      <!-- <button ion-button color="light" round (click)="loadMap();" >Recarregar</button> -->\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div id="map_canvas">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lucas/projects/alagou/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation_ngx__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id_ngx__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_0__providers_points_points__["a" /* PointsProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_16" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen_ngx__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar_ngx__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation_ngx__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera_ngx__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer_ngx__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_ngx__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_unique_device_id_ngx__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_flood_point_details_flood_point_details__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_flood_point_create_flood_point__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_points_points__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_flood_point_details_flood_point_details__["a" /* FloodPointDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_flood_point_create_flood_point__["a" /* CreateFloodPointPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-flood-point/create-flood-point.module#CreateFloodPointPageModule', name: 'CreateFloodPointPage', segment: 'create-flood-point', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flood-point-details/flood-point-details.module#FloodPointDetailsPageModule', name: 'FloodPointDetailsPage', segment: 'flood-point-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_flood_point_details_flood_point_details__["a" /* FloodPointDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_flood_point_create_flood_point__["a" /* CreateFloodPointPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar_ngx__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_unique_device_id_ngx__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera_ngx__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_ngx__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen_ngx__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_points_points__["a" /* PointsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.statusBar = statusBar;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            if (platform.is('android')) {
                statusBar.overlaysWebView(false);
            }
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/lucas/projects/alagou/src/app/app.html"*/'  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/lucas/projects/alagou/src/app/app.html"*/,
            template: '<ion-nav #nav [root]="rootPage"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer_ngx__ = __webpack_require__(224);
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
  Generated class for the PointsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PointsProvider = /** @class */ (function () {
    function PointsProvider(http, transfer) {
        this.http = http;
        this.transfer = transfer;
        // private API_URL = "https://alagou.herokuapp.com/posts";
        this.API_URL = "http://3.16.180.128:3000/posts/";
    }
    PointsProvider.prototype.getFloodPoints = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL)
                .subscribe(function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    PointsProvider.prototype.getFloodPointsDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL + id)
                .subscribe(function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    PointsProvider.prototype.getUserPoints = function (deviceID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL + 'userpoint/' + deviceID)
                .subscribe(function (result) {
                if (result.length > 0) {
                    var times = [];
                    result.forEach(function (element) {
                        var createdAt = new Date(JSON.parse(JSON.stringify(element)).createdAt);
                        var today = new Date(Date.now());
                        var datediff = today.valueOf() - createdAt.valueOf();
                        var time = Math.floor((datediff / 1000 / 60) << 0);
                        times.push(time);
                    });
                    resolve(Math.min.apply(Math, times));
                }
                else {
                    reject(result.length);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    PointsProvider.prototype.confirmFloodPoint = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + 'confirmPoint/' + id, {})
                .subscribe(function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    PointsProvider.prototype.unconfirmFloodPoint = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL + 'unconfirmPoint/' + id, {})
                .subscribe(function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    PointsProvider.prototype.createFloodPoint = function (myphoto, lat, lng, type, level, uuid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fileTransfer = _this.transfer.create();
            var options = {
                chunkedMode: false,
                httpMethod: 'post',
                mimeType: "image/jpeg",
                headers: {}
            };
            fileTransfer.upload(myphoto, _this.API_URL + lat + '/' + lng + '/' + type + '/' + level + '/' + uuid, options)
                .then(function (data) {
                resolve(data.response);
                console.log("success");
            }), function (err) {
                reject(err);
                console.log("Error");
            };
        });
    };
    PointsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer_ngx__["a" /* FileTransfer */]])
    ], PointsProvider);
    return PointsProvider;
}());

//# sourceMappingURL=points.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateFloodPointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_points_points__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(31);
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
 * Generated class for the CreateFloodPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateFloodPointPage = /** @class */ (function () {
    function CreateFloodPointPage(viewCtrl, navCtrl, camera, sn, pointsProvider, toastController, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.sn = sn;
        this.pointsProvider = pointsProvider;
        this.toastController = toastController;
        this.navParams = navParams;
        this.tabBarElement = document.querySelector('.tabbar');
        this.lat = navParams.get('lat');
        this.lng = navParams.get('lng');
        this.uuid = navParams.get('uuid');
    }
    CreateFloodPointPage.prototype.ionViewDidLoad = function () {
        this.tabBarElement.style.display = 'none';
    };
    CreateFloodPointPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.imageData = imageData;
            _this.myphoto = _this.sn.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
        }, function (err) {
            // Handle error
        });
    };
    CreateFloodPointPage.prototype.changeType = function () {
        switch (this.type) {
            case "Inundacao":
                {
                    document.getElementById('labelLevel').style.display = "inline";
                    document.getElementById("select-level").style.display = "block";
                    document.getElementById("select-type").style.backgroundColor = "#FFFFFF";
                }
                break;
            case "Alagamento":
                {
                    document.getElementById('labelLevel').style.display = "inline";
                    document.getElementById("select-level").style.display = "block";
                }
                break;
            case "Enxurrada":
                {
                    document.getElementById('labelLevel').style.display = "none";
                    document.getElementById("select-level").style.display = "none";
                    document.getElementById("select-type").style.backgroundColor = "#EA2317";
                    this.level = "enxurrada";
                }
                break;
        }
    };
    CreateFloodPointPage.prototype.changeLevel = function () {
        switch (this.level) {
            case "Moderado":
                document.getElementById("select-level").style.backgroundColor = "#35BC2D";
                break;
            case "Preocupante":
                document.getElementById("select-level").style.backgroundColor = "#FBDB1D";
                break;
            case "Critico":
                document.getElementById("select-level").style.backgroundColor = "#EA2317";
                break;
        }
    };
    CreateFloodPointPage.prototype.savePoint = function () {
        var _this = this;
        this.pointsProvider.createFloodPoint('data:image/jpeg;base64,' + this.imageData, this.lat, this.lng, this.type.toLowerCase(), this.level.toLowerCase(), this.uuid)
            .then(function (data) {
            var oData = JSON.parse(JSON.stringify(data));
            var dataMarker = {
                lat: _this.lat,
                lng: _this.lng,
                level: _this.level,
                type: _this.type,
                id: JSON.parse(oData)._id,
                deviceID: JSON.parse(oData).deviceId,
                confirmations: JSON.parse(oData).confirmations
            };
            _this.viewCtrl.dismiss(dataMarker);
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    CreateFloodPointPage.prototype.return = function () {
        this.viewCtrl.dismiss();
    };
    CreateFloodPointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-flood-point',template:/*ion-inline-start:"/home/lucas/projects/alagou/src/pages/create-flood-point/create-flood-point.html"*/'<!--\n  Generated template for the CreateFloodPointPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header  class="header">\n    <ion-navbar transparent>\n      <div class="title"><p>Alagou!</p></div>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="main-container">\n  \n  <div *ngIf="myphoto" class="img-main-container">\n    <div class="img-container">\n        <img style="width: 100%; height: 100%;" [src]=\'myphoto\'>\n    </div>   \n  </div>\n\n  <div class="img-main-container"  *ngIf="!myphoto">  \n    <div class="img-container" (click)="takePicture()">\n      <div class="get-picture">\n         <p>Registre a situação</p> \n      </div>\n    </div>   \n  </div>\n\n <div style="background-color: white; width: 90%; margin: 0 auto; padding-top: 2px;box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.20);">\n  <ion-label class="select-label">Qual o tipo de ocorrência?</ion-label>\n  <ion-list class="select-main-container" style="height:14% !important;">   \n    <ion-item id="select-type" class="select-container">      \n      <ion-select (ionChange)="changeType();" [(ngModel)]="type" class="select" cancelText="" placeholder="Selecione um tipo..." required>\n        <ion-option value="Inundacao" >Inundação</ion-option>\n        <ion-option value="Alagamento">Alagamento</ion-option>\n        <ion-option value="Enxurrada">Enxurrada</ion-option>\n      </ion-select>  \n    </ion-item>\n    <ion-label id=\'labelLevel\' class="select-label">Em que nivel a água se encontra?</ion-label>\n    <ion-item id="select-level" class="select-container">      \n      <ion-select id="level" (ionChange)="changeLevel();" [(ngModel)]="level" class="select" cancelText="" placeholder="Selecione um tipo..." required>\n        <ion-option value="Moderado" >Não preocupante</ion-option>\n        <ion-option value="Preocupante">Moderado</ion-option>\n        <ion-option value="Critico">Crítico</ion-option>\n      </ion-select>  \n    </ion-item>\n  </ion-list>\n </div> \n \n  <div class="container-btn">\n    <button (click)="savePoint();" id="btn-confirm" class="btn" ion-button block>Confirmar</button>\n    <button (click)="return();" id="btn-cancel" class="btn" ion-button block color = \'danger\'>Cancelar</button>    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lucas/projects/alagou/src/pages/create-flood-point/create-flood-point.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__providers_points_points__["a" /* PointsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CreateFloodPointPage);
    return CreateFloodPointPage;
}());

//# sourceMappingURL=create-flood-point.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloodPointDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_points_points__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
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
 * Generated class for the FloodPointDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FloodPointDetailsPage = /** @class */ (function () {
    function FloodPointDetailsPage(navCtrl, viewCtrl, sn, pointsProvider, toastController, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.sn = sn;
        this.pointsProvider = pointsProvider;
        this.toastController = toastController;
        this.navParams = navParams;
        pointsProvider.getFloodPointsDetails(navParams.get('id'))
            .then(function (result) {
            _this.floodPointDetails = result;
            _this.level = result.level.toUpperCase();
            _this.type = result.type.toUpperCase();
            _this.imageUrl = result.url;
            _this.myphoto = (result.url);
            var createdAt = new Date(_this.floodPointDetails.createdAt);
            var today = new Date(Date.now());
            var datediffCreate = today.valueOf() - createdAt.valueOf();
            _this.createTime = Math.floor((datediffCreate / 1000 / 60) << 0);
            var updatedAt = new Date(_this.floodPointDetails.updatedAt);
            var datediffUpdate = today.valueOf() - updatedAt.valueOf();
            _this.updateTime = Math.floor((datediffUpdate / 1000 / 60) << 0);
            var typeImgUrl;
            if (_this.createTime > 1) {
                _this.labelCreate = 'minutos';
            }
            else if (_this.createTime < 60) {
                _this.labelCreate = 'minuto';
            }
            if (_this.updateTime > 1) {
                _this.labelUpdate = 'minutos';
            }
            else if (_this.updateTime < 60) {
                _this.labelUpdate = 'minuto';
            }
            if (_this.level.toLowerCase() == "critico") {
                if (_this.type.toLowerCase() == "alagamento") {
                    typeImgUrl = '../../assets/icon/alagamentoCritico.png';
                }
                else if (_this.type.toLowerCase() == "inundacao") {
                    typeImgUrl = '../../assets/icon/inundacaoCritico.png';
                }
            }
            else if (_this.level.toLowerCase() == "moderado") {
                if (_this.type.toLowerCase() == "alagamento") {
                    typeImgUrl = '../../assets/icon/alagamentoLivre.png';
                }
                else if (_this.type.toLowerCase() == "inundacao") {
                    typeImgUrl = '../../assets/icon/inundacaoLivre.png';
                }
            }
            else if (_this.level.toLowerCase() == "preocupante") {
                if (_this.type.toLowerCase() == "alagamento") {
                    typeImgUrl = '../../assets/icon/alagamentoModerado.png';
                }
                else if (_this.type.toLowerCase() == "inundacao") {
                    typeImgUrl = '../../assets/icon/inundacaoModerado.png';
                }
            }
            else {
                typeImgUrl = '../../assets/icon/enxurrada.png';
            }
            if (_this.type.toLowerCase() == "enxurrada") {
                _this.level = "";
            }
            if (_this.level.toLowerCase() == "moderado") {
                _this.level = 'NÃO PREOCUPANTE';
            }
            else if (_this.level.toLowerCase() == "preocupante") {
                _this.level = 'MODERADO';
            }
            switch (_this.level) {
                case "moderado":
                    document.getElementById("level").style.backgroundColor = "#2FBA2B";
                    break;
                case "preocupante":
                    document.getElementById("level").style.backgroundColor = "#FEDD00";
                    break;
                case "critico":
                    document.getElementById("level").style.backgroundColor = "#F4141C";
                    break;
            }
            _this.typeImg = _this.sn.bypassSecurityTrustUrl(typeImgUrl);
        })
            .catch(function (error) {
            _this.toastController.create({ message: 'Erro na requisição. Erro: ' + error.error, position: 'bottom', duration: 3000 }).present();
        });
    }
    FloodPointDetailsPage.prototype.confirm = function (data) {
        switch (data) {
            case 1:
                {
                    this.pointsProvider.confirmFloodPoint(this.navParams.get('id'));
                    document.getElementById('container-choice').style.display = 'none';
                    document.getElementById('container-confirmado').style.display = 'flex';
                }
                break;
            case 2:
                {
                    document.getElementById('container-choice').style.display = 'none';
                    document.getElementById('container-nconfirmado').style.display = 'flex';
                    this.pointsProvider.unconfirmFloodPoint(this.navParams.get('id'));
                }
                break;
            case 3:
                {
                    document.getElementById('container-choice').style.display = 'none';
                    document.getElementById('container-nsabe').style.display = 'flex';
                }
                break;
        }
    };
    FloodPointDetailsPage.prototype.return = function () {
        this.viewCtrl.dismiss();
    };
    FloodPointDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flood-point-details',template:/*ion-inline-start:"/home/lucas/projects/alagou/src/pages/flood-point-details/flood-point-details.html"*/'<!--\n  Generated template for the FloodPointDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header  class="header">\n  <ion-navbar transparent>\n    <div class="title"><p>Alagou!</p></div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-container">\n\n  <div class="img-main-container">\n      <div class="img-container">\n          <img style="width: 100%; height: 100%;" [attr.src]=\'myphoto\'>\n      </div>   \n  </div>    \n\n  <div class="container-info">\n    <label class="label-info">TIPO DA OCORRÊNCIA</label>\n    <div id="type" class="info">\n      <label class="data" >{{type}}</label>\n    </div>\n  </div>\n  <div class="container-info">\n    <label class="label-info">NÍVEL DA ÁGUA</label>\n    <div id="level" class="info">\n      <img width="30px" height="30px"  [src]=\'typeImg\'>\n      <label class="data" >{{level}}</label>\n    </div>\n  </div>\n\n  <div  id="container-choice" class="container-confirmation">\n      <p id="create">Cadastrado há {{createTime}} {{labelCreate}}</p>\n      <p id="confirmation">Confirmado há {{updateTime}} {{labelUpdate}}</p>\n\n      <p style="font-size: 2rem;">O ponto continua neste estado?</p>\n      <div class="container-buttons">\n        <button ion-button color="secondary" round (click)="confirm(1);" >Sim</button>\n        <button ion-button color="danger" round (click)="confirm(2);">Não</button>\n        <button ion-button color="dark" round (click)="confirm(3);">Não sei</button>\n      </div>\n  </div>\n\n  <div id="container-confirmado" style="display: none; flex-direction: column; justify-content: center; align-items: center;"  class="container-confirmation">\n    <p id="label-confirmou">Ponto confirmado! Obrigado pela contribuição.</p>\n    <button ion-button color="light" round (click)="return();" >OK</button>\n  </div>\n\n  <div id="container-nconfirmado" style="display: none; flex-direction: column; justify-content: center; align-items: center;"  class="container-confirmation">\n    <p id="label-nconfirmou">Ponto não confirmado! Obrigado pela contribuição.</p>\n    <button ion-button color="light" round (click)="return();" >OK</button>\n  </div>\n\n  <div id="container-nsabe" style="display: none; flex-direction: column; justify-content: center; align-items: center;"  class="container-confirmation">\n    <p id="label-nsabe">Obrigado pela contribuição.</p>\n    <button ion-button color="secondary" round (click)="return();" >OK</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/lucas/projects/alagou/src/pages/flood-point-details/flood-point-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__providers_points_points__["a" /* PointsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FloodPointDetailsPage);
    return FloodPointDetailsPage;
}());

//# sourceMappingURL=flood-point-details.js.map

/***/ })

},[271]);
//# sourceMappingURL=main.js.map