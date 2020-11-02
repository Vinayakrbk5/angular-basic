import { Component, OnInit } from '@angular/core';
import {RegisterData} from './register.data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
fullName:string='';
email:string='';
regData:RegisterData=new RegisterData('','');

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit()
  {
    console.log("Invoked onSubmit()");
    console.log(this.regData.toString());
  }

  onClick()
  {
    console.log("Invoked onClick()");
  }
}
