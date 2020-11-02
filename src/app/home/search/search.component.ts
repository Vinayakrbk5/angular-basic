import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SineupData } from 'src/app/sineup/sineup.data';
import { AddData } from '../add/add.data';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  email:string;
  dataList:SineupData[]=[];
  addData:SineupData=new SineupData('','','','','','');
  mess:string='';
  check:boolean;

  constructor(private searchService:SearchService,private _router:Router) { }

  ngOnInit(): void {
    console.log('Invoked ngOnInit() from SearchComponent');
    this.searchService.searchData().subscribe(data=>{
      console.log(data);
      this.dataList=data['storedDataList'];
    });
  }

  onSearch()
  {
    console.log("Invoked onSearch()");
    console.log('email is : '+this.email);
    for(let i of this.dataList)
    {
      if(i.email==this.email)
      {
        this.addData=i;
        this.check=true;
        
        break;
      }
    }
    if(!this.check)
    {
      this.mess='entered wrong email';
    }
  }
  onChange()
  {
    console.log("Invoked onChange()");
    this.mess='';
    this.check=false;
  }

}
