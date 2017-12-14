import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";


/*
  Generated class for the AccesoDatosJsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccesoDatosJsonProvider {

  constructor(public http: Http) {
    console.log('Hello AccesoDatosJsonProvider Provider');
  }

getMenus(){
  return this.http.get('assets/data/menus.json')
   .map((response:Response)=>response.json());
}
}
