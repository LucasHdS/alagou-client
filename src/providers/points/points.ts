import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
/*
  Generated class for the PointsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PointsProvider {

  // private API_URL = "https://alagou.herokuapp.com/posts";
  private API_URL = "http://3.16.180.128:3000/posts/";

  constructor(public http: HttpClient, private transfer: FileTransfer) {  }

  getFloodPoints(){
    return new Promise((resolve,reject) =>{

      this.http.get(this.API_URL)
        .subscribe((result: any) =>{
          resolve(result)
        },
        (error) => {
          reject(error);
        })  
    });    
  }
  
  getFloodPointsDetails(id: number){
    return new Promise((resolve,reject) =>{
      this.http.get(this.API_URL + id)
        .subscribe((result: any) =>{
          resolve(result)
        },
        (error) => {
          reject(error);
        })  
    });    
  }
   
  getUserPoints(deviceID: string){
    return new Promise((resolve,reject) => {
      this.http.get(this.API_URL + 'userpoint/' + deviceID)
        .subscribe((result: {}[]) =>{
          if(result.length > 0){
            var times: number[] = [];
            result.forEach(element => {  
              const createdAt = new Date(JSON.parse(JSON.stringify(element)).createdAt);            
              const today = new Date(Date.now());  
              const datediff = today.valueOf() - createdAt.valueOf();
              const time = Math.floor((datediff/1000/60) << 0);
              times.push(time);              
            });
            resolve(Math.min.apply(Math,times))
          }
          else{
            reject(result.length)
          }
        },
        (error) => {
          reject(error);
        })
    });
  }

  confirmFloodPoint(id: number){
    return new Promise((resolve,reject) =>{
      this.http.post(this.API_URL + 'confirmPoint/' + id,{})
        .subscribe((result) =>{
          resolve(result);
        },
        (error) =>{
          reject(error);
        })
    });
  }

  unconfirmFloodPoint(id: number){
    return new Promise((resolve,reject) =>{
      this.http.post(this.API_URL + 'unconfirmPoint/' + id,{})
        .subscribe((result) =>{
          resolve(result);
        },
        (error) =>{
          reject(error);
        })
    });
  }

  createFloodPoint(myphoto: string, lat: number, lng: number,type: string, level: string, uuid: number){
    return new Promise((resolve,reject) =>{

      const fileTransfer: FileTransferObject = this.transfer.create();

      let options: FileUploadOptions = {
        chunkedMode: false,
        httpMethod: 'post',
        mimeType: "image/jpeg",
        headers:{}        
      }

      fileTransfer.upload(myphoto,this.API_URL + lat + '/' + lng + '/' + type + '/' + level + '/' + uuid,options)
        .then((data)=>{
          resolve(data.response);
          console.log("success");
        }), (err) =>{
          reject(err);
          console.log("Error");
        }
    });    
   }
}
