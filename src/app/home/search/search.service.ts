import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http:HttpClient) { 
    console.log("Created SearchService");
  }

  searchData()
  {
    console.log('Invoked searchData()');
    let url='https://x-workz-seo-based-webapp.appspot.com/v2/fetchData/vin';
    return this._http.get(url);
  }
}
