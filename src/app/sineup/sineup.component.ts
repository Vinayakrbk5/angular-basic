import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {SineupData} from './sineup.data';
import { SineupService } from './sineup.service';

@Component({
  selector: 'app-sineup',
  templateUrl: './sineup.component.html',
  styleUrls: ['./sineup.component.css']
})
export class SineupComponent implements OnInit {
sineupGroup:FormGroup=this._fb.group({firstName:'',lastName:'',email:'',mobile:'',dob:'',password:''});
sineupData:SineupData=new SineupData('','','','','','');
status:string='';
valueCheck:string='';
  constructor(private _fb:FormBuilder,private _service:SineupService,private _router:Router) { 
    console.log("Created SineupComponent");
  }

  ngOnInit(): void {
    console.log("Invoked ngOnInit()");
    let name=localStorage.getItem('logout');
    console.log("Set name is : "+name);
    // if(name=='no')
    // {
    //   this._router.navigate(["sineup"]);
    // }
    // else
    // {
      // this._router.navigate(['sinein']);
    // }
  }

  onChange()
  {
    console.log("Invoked onChange()");
    this.status='';
  }

  onSubmit()
  {
    console.log("Invoked onSubmit()");
    this.sineupData.firstName=this.sineupGroup.value.firstName;
    this.sineupData.lastName=this.sineupGroup.value.lastName;
    this.sineupData.email=this.sineupGroup.value.email;
    this.sineupData.mobile=this.sineupGroup.value.mobile;
    this.sineupData.dob=this.sineupGroup.value.dob;
    this.sineupData.password=this.sineupGroup.value.password;
    console.log(this.sineupData.toString());
    this._service.save(this.sineupData).subscribe(data=>{
      console.log("Status : "+data);
    })
    this.sineupGroup=this._fb.group({firstName:'',lastName:'',email:'',mobile:'',dob:'',password:''});
    this.status="response submitted"
  }

  onCheck(value)
  {
    console.log("Invoked onCheck()");
    this.valueCheck=value;
  }

}
