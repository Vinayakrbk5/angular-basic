import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RegisterComponent } from './register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const formElements=[MatButtonModule,MatButtonToggleModule,MatFormFieldModule,MatInputModule]

@NgModule({
  imports: [formElements,FormsModule],
    exports:[formElements],
    declarations: [RegisterComponent]
})
export class RegisterModule { }
