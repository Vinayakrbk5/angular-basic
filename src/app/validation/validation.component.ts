import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input()
  value:string='';

  @Output()
  valueCheck:EventEmitter<string>=new EventEmitter();
  constructor() {
    console.log("Created ValidationComponent");
   }

  ngOnInit(): void {
    this.valueCheck.emit(this.value);
  }

}
