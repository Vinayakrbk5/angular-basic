import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SineupData } from 'src/app/sineup/sineup.data';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {

  constructor(private _http:HttpClient) { 
    console.log("Created AddserviceService");
  }

    addData(data:SineupData)
    {
      console.log("Invoked addData()");
      let url="https://x-workz-seo-based-webapp.appspot.com/v2/save";
      let body={'vin':data};
      return this._http.post(url,body);
      
    }

}
