import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SineupData } from 'src/app/sineup/sineup.data';
import {AddData} from './add.data';
import { AddserviceService } from './addservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addData:SineupData=new SineupData('','','','','','');

  formGroup:FormGroup=this.fb.group({firstName:['',[Validators.required,Validators.minLength(3)]],
  lastName:['',[Validators.required,Validators.minLength(2)]],email:['',[Validators.required,Validators.minLength(7)]],
  mobile:['',[Validators.required,Validators.minLength(10)]],dob:['',Validators.required],password:['',[Validators.required,Validators.minLength(5)]]});
  constructor(private fb:FormBuilder,private _addService:AddserviceService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("Invoked onSubmit()");
    console.log(this.formGroup.value);
    this.addData=this.formGroup.value;
    this._addService.addData(this.addData).subscribe(data=>{
      console.log(data);
    });
  }

}
