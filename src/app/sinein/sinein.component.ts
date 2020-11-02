import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SineupData } from '../sineup/sineup.data';
import { SineupModel } from '../sineup/sineup.model';
import {SineinService} from './sinein.service';

@Component({
  selector: 'app-sinein',
  templateUrl: './sinein.component.html',
  styleUrls: ['./sinein.component.css']
})
export class SineinComponent implements OnInit {
  email:string;
  password:string;
  sineupModel:SineupModel=new SineupModel('',[]);
  sineupData:SineupData[]=[];
  check:string='';
  setValue:string='fail';
  mess:string='';
  checkData:string='';
  constructor(private _service:SineinService,private _router:Router) { 
    console.log("Created SineinComponent");
  }

  ngOnInit(): void {
    console.log("Invoked ngOnInit()");
    let name=localStorage.getItem('logout');
    if(name=='yes')
    {
this.mess='please sine-in';
    }
    this._service.fetchData().subscribe(data=>{
      this.sineupData=data.storedDataList;
      console.log(data);
    });
  }

  onSinein()
  {
    console.log("Invoked onSinein()");
    console.log("Email : "+this.email);
    console.log("Password : "+this.password);
    if(this.sineupData!=null)
    {
      console.log("object is not null");
      for(let i=0;i<this.sineupData.length;i++)
      {
        console.log("Inside for loop");
        if(this.email===this.sineupData[i].email && this.password===this.sineupData[i].password)
        {
          console.log("Inside if ");
          sessionStorage.setItem('name',this.sineupData[i].firstName);
          // localStorage.setItem('logout','no');
          // this._service.isLoggedIn=true;
          this._router.navigate(["home"]);
          break;
        }
        else{
          console.log("Inside else");
          this._router.navigate(["sinein"]);
          this.check="invalid credentials";
        }
      }
    }
    else{
      console.log("Object is null");
      this.checkData='entire history got deleted';
    }
  }

  onChange()
  {
    console.log("Invoked onChange()");
    this.check='';
    this.mess='';
    this.checkData='';
  }

}
