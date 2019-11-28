import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { PointsProvider } from '../../providers/points/points';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
/**
 * Generated class for the FloodPointDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flood-point-details',
  templateUrl: 'flood-point-details.html',
})
export class FloodPointDetailsPage {

  floodPointDetails;
  myphoto : SafeUrl;
  typeImg : SafeUrl;
  level: String;
  type: String;
  imageUrl: String; 
  createTime: Number;
  updateTime: Number;
  labelUpdate: String;
  labelCreate: String; 
  clickedPoints: {
    id: String,
    state: Number
  }[];
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public sn: DomSanitizer, 
    public pointsProvider : PointsProvider,
    public toastController: ToastController, 
    public navParams: NavParams) {

    pointsProvider.getFloodPointsDetails(navParams.get('id'))
      .then((result : any) =>{
        this.floodPointDetails = result;
        this.level = result.level.toUpperCase();
        this.type = result.type.toUpperCase();
        this.imageUrl = result.url;
        this.myphoto = (result.url);

        const createdAt = new Date(this.floodPointDetails.createdAt);            
        const today = new Date(Date.now());  
        const datediffCreate = today.valueOf() - createdAt.valueOf();
        this.createTime = Math.floor((datediffCreate/1000/60) << 0);

        const updatedAt = new Date(this.floodPointDetails.updatedAt);            
        const datediffUpdate = today.valueOf() - updatedAt.valueOf();
        this.updateTime = Math.floor((datediffUpdate/1000/60) << 0);
        let typeImgUrl: any;

        if(this.createTime > 1)
        {
          this.labelCreate = 'minutos';
        }
        else if (this.createTime < 60){
          this.labelCreate = 'minuto';
        }

        if(this.updateTime > 1)
        {
          this.labelUpdate = 'minutos';
        }
        else if (this.updateTime < 60){
          this.labelUpdate = 'minuto';
        }

        if(this.level.toLowerCase() == "critico")
        { 
          if(this.type.toLowerCase() == "alagamento" ){
            typeImgUrl = '../../assets/icon/alagamentoCritico.png'
          }
          else 
          if (this.type.toLowerCase() == "inundacao")
          {
            typeImgUrl = '../../assets/icon/inundacaoCritico.png'
          }
        } 
        else if (this.level.toLowerCase() == "moderado")
        {
          if(this.type.toLowerCase() == "alagamento" ){
            typeImgUrl = '../../assets/icon/alagamentoLivre.png'
          }
          else 
          if (this.type.toLowerCase() == "inundacao")
          {
            typeImgUrl = '../../assets/icon/inundacaoLivre.png'
          }
        } 
        else if (this.level.toLowerCase() == "preocupante") 
        {
          if(this.type.toLowerCase() == "alagamento" ){
            typeImgUrl = '../../assets/icon/alagamentoModerado.png'
          }
          else 
          if (this.type.toLowerCase() == "inundacao")
          {
            typeImgUrl = '../../assets/icon/inundacaoModerado.png'
          }
        }
        else
        {
          typeImgUrl = '../../assets/icon/enxurrada.png'
        }           

        if(this.type.toLowerCase() == "enxurrada"){
          this.level = "";
        }

        if(this.level.toLowerCase() == "moderado"){
          this.level = 'NÃO PREOCUPANTE';
        } else if (this.level.toLowerCase() == "preocupante"){
          this.level = 'MODERADO'
        }

        switch(this.level){
          case "moderado": document.getElementById("level").style.backgroundColor = "#2FBA2B";
          break;
          case "preocupante": document.getElementById("level").style.backgroundColor = "#FEDD00";
          break;
          case "critico": document.getElementById("level").style.backgroundColor = "#F4141C";
          break;
        }

        this.typeImg = this.sn.bypassSecurityTrustUrl(typeImgUrl);

      })
      .catch((error : any) => {
        this.toastController.create({message: 'Erro na requisição. Erro: ' + error.error, position: 'bottom', duration: 3000 }).present();
      })
    }
    
    public confirm(data){
      switch(data){
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
    }
    return(){
      this.viewCtrl.dismiss();
    }
}