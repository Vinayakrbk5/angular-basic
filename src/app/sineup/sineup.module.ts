import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SineupComponent } from './sineup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {SineupService} from './sineup.service';
import {HttpClientModule} from '@angular/common/http';

const formModules=[MatFormFieldModule,MatInputModule,MatButtonModule]


@NgModule({
  declarations: [SineupComponent],
  imports: [
    CommonModule,ReactiveFormsModule,formModules,HttpClientModule
  ],
  exports:[formModules],
  providers:[SineupService]
})
export class SineupModule { }
