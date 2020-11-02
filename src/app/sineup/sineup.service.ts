import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SineupData } from './sineup.data';
import {FORM_SAVE_URL} from './constants/constants.data';

@Injectable({
  providedIn: 'root'
})
export class SineupService {

  constructor(private _http:HttpClient) {
    console.log("Created SineupService");
   }

   save(data:SineupData){
     console.log("Invoked save() from service");
     let url=FORM_SAVE_URL;
     let body={"vin":data};
     return this._http.post(url,body);
   }
}
