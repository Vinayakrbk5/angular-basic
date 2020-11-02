import { Component, OnInit } from '@angular/core';
import { SineupData } from 'src/app/sineup/sineup.data';
import {GethistoryService} from './gethistory.service';

@Component({
  selector: 'app-gethistory',
  templateUrl: './gethistory.component.html',
  styleUrls: ['./gethistory.component.css']
})
export class GethistoryComponent implements OnInit {

  dataList:SineupData[]=[];

  constructor(private _historyService:GethistoryService) {
    console.log("Created GethistoryComponent");
   }

  ngOnInit(): void {
    console.log("invoked ngOnInit() from GethistoryComponent");
    this._historyService.getHistory().subscribe(data=>{
      console.log(data);
      this.dataList=data['storedDataList'];
    })
  }

}
