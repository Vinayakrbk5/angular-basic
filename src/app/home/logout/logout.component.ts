import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
    console.log("Invoked ngOnInit() from logout");
    sessionStorage.clear();
    localStorage.clear();
    this._router.navigate(["sinein"]);

  }

}
