import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RegisterModule} from './register/register.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {SineupModule} from './sineup/sineup.module';
import {SineinModule} from './sinein/sinein.module';
import {ValidationModule } from './validation/validation.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegisterModule,
    SineupModule,
    SineinModule,
    ValidationModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
