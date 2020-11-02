import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string;
  // fname=localStorage.getItem('name');
  constructor(private _router:Router) { }

  ngOnInit(): void {

    console.log("Invoked ngOnInit()");
    this.name=sessionStorage.getItem('name');
  }

  add()
  {
    console.log("Invoked add()");
    this._router.navigate(['home/add']);
  }

  logout()
  {
    console.log("Invoked logout()");
    this._router.navigate(['home/logout']);
  }

  search()
  {
    console.log("Invoked search()");
    this._router.navigate(['home/search']);
  }

  getHistory()
  {
    console.log("Invoked getHistory()");
    this._router.navigate(['home/history']);
  }

}
