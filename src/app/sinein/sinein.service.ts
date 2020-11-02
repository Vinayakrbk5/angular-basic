import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {SineupModel} from '../sineup/sineup.model';
import {FORM_GET_URL} from '../sineup/constants/constants.data';

@Injectable({
  providedIn: 'root'
})
export class SineinService {

  // isLoggedIn:boolean;

  constructor(private _http:HttpClient) { 
    console.log("Created SineinService");
  }

  onSinein(email:string,password:string):string
  {
    console.log("Invoked onSinein()");
    return status;

  }

  fetchData():Observable<SineupModel>
  {
    console.log("Invoked fetchData()");
    let url=FORM_GET_URL;
    return this._http.get<SineupModel>(url);
  }

}
