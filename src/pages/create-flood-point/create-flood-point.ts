import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { PointsProvider } from '../../providers/points/points';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
/** 
 * Generated class for the CreateFloodPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-flood-point',
  templateUrl: 'create-flood-point.html',
})
export class CreateFloodPointPage {
  tabBarElement:any;
  uuid:any;
  lat:any;
  lng:any;
  level:string;
  type:string;
  imageData: string;
  myphoto : SafeUrl;
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public camera: Camera, 
    public sn: DomSanitizer, 
    public pointsProvider : PointsProvider,
    public toastController: ToastController, 
    public navParams: NavParams) {

    this.tabBarElement = document.querySelector('.tabbar');
    this.lat = navParams.get('lat');
    this.lng = navParams.get('lng');
    this.uuid = navParams.get('uuid');
  }
    
    ionViewDidLoad(){
      this.tabBarElement.style.display = 'none';
    }
    
    takePicture(){

    const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.imageData = imageData;
        this.myphoto = this.sn.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);    
      }, (err) => {
         // Handle error
       });
    }

    changeType(){
      switch(this.type){
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
    }

    changeLevel(){
      switch(this.level){
        case "Moderado": document.getElementById("select-level").style.backgroundColor = "#35BC2D";
        break;
        case "Preocupante": document.getElementById("select-level").style.backgroundColor = "#FBDB1D";
        break;
        case "Critico": document.getElementById("select-level").style.backgroundColor = "#EA2317";
        break;
      }
    }

    savePoint(){
      this.pointsProvider.createFloodPoint('data:image/jpeg;base64,' + this.imageData,this.lat,this.lng,this.type.toLowerCase(),this.level.toLowerCase(),this.uuid)
      .then((data)=>{
        let oData = JSON.parse(JSON.stringify(data));
        const dataMarker = {
          lat : this.lat,
          lng : this.lng,
          level : this.level,
          type : this.type,
          id : JSON.parse(oData)._id,
          deviceID : JSON.parse(oData).deviceId,
          confirmations : JSON.parse(oData).confirmations         
        }         
        this.viewCtrl.dismiss(dataMarker);
      })
      .catch((err)=>{
        console.log("err");
      })
    }

    return(){
      this.viewCtrl.dismiss();
    }
} 
