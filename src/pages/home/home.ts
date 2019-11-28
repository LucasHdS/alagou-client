import { PointsProvider } from '../../providers/points/points';
import { Component } from '@angular/core';
import { ToastController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { AlertController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  Environment,
  MarkerCluster,
  Circle
} from '@ionic-native/google-maps/ngx';
import { FloodPointDetailsPage } from '../flood-point-details/flood-point-details';
import { CreateFloodPointPage } from '../create-flood-point/create-flood-point';
import { throwError } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  tabBarElement: any; 
  map: GoogleMap;
  circle: Circle;
  points = [];
  uuid: any;
  icon: any;
  constructor(
    private modalCtrl: ModalController,
    private geolocation: Geolocation, 
    private uniqueDeviceID: UniqueDeviceID,
    private pointsProvider : PointsProvider, 
    private toastController: ToastController,
    private alertCtrl: AlertController) 
    {
      this.tabBarElement = document.querySelector('.tabbar');
    }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
    this.loadMap();    
    this.uniqueDeviceID.get()
      .then((uuid: any) => this.uuid = uuid)
      .catch((error:any) => console.log(error));    
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          },
          zoom: 15,
          tilt: 0
        },
        icon:{
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

      this.map = GoogleMaps.create('map_canvas', mapOptions);

      this.circle = this.map.addCircleSync({
        center: {
          lat : resp.coords.latitude,
          lng : resp.coords.longitude  
        },
        radius: 50,
        strokeColor: '#FFFFFF',
        strokeWidth: 0,
        fillColor: 'rgba(50,224,68,0.3)',
        clickable: true
      })

      this.circle.on(GoogleMapsEvent.CIRCLE_CLICK).subscribe((e)=>{
        
        let lat = e[0].lat; 
        let lng = e[0].lng;

        let createFloodPointModal = this.modalCtrl.create(CreateFloodPointPage, {lat: lat, lng: lng, uuid: this.uuid});
        createFloodPointModal.onDidDismiss(data=>{
          //console.log(data);
          this.tabBarElement.style.display = 'flex';
          if(data != null)
          {
            const criticoAlagamentoIcon = {
              url: "assets/icon/alagamentoCritico.png",
              size: {
                width: 32,
                height: 32
              }
            };
  
            const moderadoAlagamentoIcon = {
              url: "assets/icon/alagamentoLivre.png",
              size: {
                width: 32,
                height: 32
              }
            }; 
                                  
            const preocupanteAlagamentoIcon = {
              url: "assets/icon/alagamentoModerado.png",
              size: {
                width: 32,
                height: 32
              }
            };

            const criticoInundacaoIcon = {
              url: "assets/icon/inundacaoCritico.png",
              size: {
                width: 32,
                height: 32
              }
            };
            const moderadoInundacaoIcon = {
              url: "assets/icon/inundacaoLivre.png",
              size: {
                width: 32,
                height: 32
              }
            };
            const preocupanteInundacaIcon = {
              url: "assets/icon/inundacaoModerado.png",
              size: {
                width: 32,
                height: 32
              }
            };
            const enxurradaIcon = {
              url: "assets/icon/enxurrada.png",
              size: {
                width: 32,
                height: 32
              }
            };

            if(data.level.toLowerCase() == "critico")
            {
              if(data.type.toLowerCase() == "alagamento" ){
                this.addMarker(criticoAlagamentoIcon,data);
              }
              else 
              if (data.type.toLowerCase() == "inundacao")
              {
                this.addMarker(criticoInundacaoIcon,data);
              }
            } 
            else if (data.level.toLowerCase() == "moderado")
            {
              if(data.type.toLowerCase() == "alagamento" ){
                this.addMarker(moderadoAlagamentoIcon,data);
              }
              else 
              if (data.type.toLowerCase() == "inundacao")
              {
                this.addMarker(moderadoInundacaoIcon,data);
              }
            } 
            else if ("preocupante") 
            {
              if(data.type.toLowerCase() == "alagamento" ){
                this.addMarker(preocupanteAlagamentoIcon,data);
              }
              else 
              if (data.type.toLowerCase() == "inundacao")
              {
                this.addMarker(preocupanteInundacaIcon,data);
              }
            }
            else
            {
              this.addMarker(enxurradaIcon,data);
            }
          }
        })

        this.pointsProvider.getUserPoints(this.uuid)
        .then((result) => {
          if(result > 2){
            createFloodPointModal.present();         
          }
          else
          {
            const alert = this.alertCtrl.create({
              title: 'Seu ponto já foi registrado. Obrigado!',
              subTitle: 'Você já registrou um ponto nos ultimos 2 minutos, a comunidade agradece pela sua contribuição!',
              buttons: ['OK']
            });
            alert.present();  
          }
        })
        .catch((error) => {  
          if(error == 0){
            createFloodPointModal.present();         
          }else{
            throwError(error);
          }
        })

      });

      this.fillFloodPoints()
        .then((result : any) =>{
          let markerCluster: MarkerCluster = this.map.addMarkerClusterSync({
            boundsDraw: false,
            markers: this.points,
            icons: [
              {
                min: 500,
                url: '../../assets/icon/water-drop.png'
              }
            ]
          });

          markerCluster.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe((params) =>{
              console.log('chegou');
              let marker: Marker = params[1];
              let modal = this.modalCtrl.create(FloodPointDetailsPage, {id: marker.get('id')});
              modal.present();                
            });
        })
        .catch((error) =>{
          this.toastController.create({message: 'Erro ao listar pontos de alagamento. Erro: ' + error, position: 'bottom', duration: 3000 }).present();
          console.log(error);
        })
      })
      .catch((error) => {
        console.log('Erro getting location', JSON.stringify(error));
        alert("Erro ao capturar sua posição. Por favor verifique se deu permissão ap aplicativo");
      });

     Environment.setEnv({
       'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBgdw5bTUGo_wMXruO-5jZqKJvOMZGMGM8',
       'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBgdw5bTUGo_wMXruO-5jZqKJvOMZGMGM8'
     });

  }

  private addMarker(icon,data){
    let marker: Marker = this.map.addMarkerSync({   
      icon: icon,
       animation: 'DROP',
       position: {
         lat: data.lat,
         lng: data.lng
       },
       id : data.id,
       deviceID: data.deviceID,
       confirmations: data.confirmations 
    });      
    marker.showInfoWindow();
  }

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

  private fillFloodPoints() {
    return new Promise((resolve,reject) =>{
      
      this.pointsProvider.getFloodPoints()
        .then((result: any) => {
          console.log(result);

          const criticoAlagamentoIcon = {
            url: "assets/icon/alagamentoCritico.png",
            size: {
              width: 32,
              height: 32
            }
          };

          const moderadoAlagamentoIcon = {
            url: "assets/icon/alagamentoLivre.png",
            size: {
              width: 32,
              height: 32
            }
          }; 
                                
          const preocupanteAlagamentoIcon = {
            url: "assets/icon/alagamentoModerado.png",
            size: {
              width: 32,
              height: 32
            }
          };

          const criticoInundacaoIcon = {
            url: "assets/icon/inundacaoCritico.png",
            size: {
              width: 32,
              height: 32
            }
          };
          const moderadoInundacaoIcon = {
            url: "assets/icon/inundacaoLivre.png",
            size: {
              width: 32,
              height: 32
            }
          };
          const preocupanteInundacaIcon = {
            url: "assets/icon/inundacaoModerado.png",
            size: {
              width: 32,
              height: 32
            }
          };
          const enxurradaIcon = {
            url: "assets/icon/enxurrada.png",
            size: {
              width: 32,
              height: 32
            }
          };                    

          result.forEach(floodPoint => { 
            console.log(floodPoint);        
            const today = new Date(Date.now());     
            const updatedAt = new Date(floodPoint.updatedAt);            
            const datediffUpdate = today.valueOf() - updatedAt.valueOf();
            const updateTime = Math.floor((datediffUpdate/1000/60) << 0);
            console.log(floodPoint.type);
            if(floodPoint.level== "critico")
            { 
              if(floodPoint.type == "alagamento" ){
                this.icon = criticoAlagamentoIcon;
              }
              else 
              if (floodPoint.type == "inundacao")
              {
                this.icon = criticoInundacaoIcon;
              }
            } 
            else if (floodPoint.level == "moderado")
            {
              if(floodPoint.type == "alagamento" ){
                this.icon = moderadoAlagamentoIcon;
              }
              else 
              if (floodPoint.type == "inundacao")
              {
                this.icon = moderadoInundacaoIcon;
              }
            } 
            else if (floodPoint.level == "preocupante") 
            {
              if(floodPoint.type == "alagamento" ){
                this.icon = preocupanteAlagamentoIcon;
              }
              else 
              if (floodPoint.type == "inundacao")
              {
                this.icon = preocupanteInundacaIcon;
              }
            }
            else
            {
              this.icon = enxurradaIcon;
            }            
            
            
            if (updateTime < 5)
            {
              if (floodPoint.confirmations > -5)
              {
                let point = {
                  position: {
                    lat: floodPoint.lat,
                    lng: floodPoint.lng   
                  },
                  id: floodPoint._id,
                  icon : this.icon
                }
                this.points.push(point);    
              }
            }     
            resolve(this.points)
          });
        })     
        .catch((error : any) => {
          reject(error);
          this.toastController.create({message: 'Erro na requisição. Erro: ' + error.error, position: 'bottom', duration: 3000 }).present();
        }) 
    })  
  } 
}


