import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SineinComponent } from './sinein.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';

const formModules=[MatButtonModule,MatFormFieldModule,MatInputModule];

@NgModule({
  declarations: [SineinComponent],
  imports: [
    CommonModule,FormsModule,HttpClientModule,formModules
  ],
  exports:[formModules]
})
export class SineinModule { }
