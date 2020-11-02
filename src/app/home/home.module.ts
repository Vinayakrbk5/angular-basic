import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddComponent} from './add/add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import {AddserviceService} from './add/addservice.service';
import { SearchComponent } from './search/search.component';
import {SearchService} from './search/search.service';
import { GethistoryComponent } from './gethistory/gethistory.component';

const matFormModules=[MatFormFieldModule,MatInputModule,MatButtonModule];



@NgModule({
  declarations: [AddComponent, LogoutComponent, SearchComponent, GethistoryComponent],
  imports: [
    CommonModule,matFormModules,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers:[AddserviceService,SearchService]
})
export class HomeModule { }
