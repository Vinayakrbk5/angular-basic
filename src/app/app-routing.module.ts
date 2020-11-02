import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './home/add/add.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './home/logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { SineinComponent } from './sinein/sinein.component';
import {SineupComponent} from './sineup/sineup.component';
import {AppGuard} from './app.guard';
import { SearchComponent } from './home/search/search.component';
import { GethistoryComponent } from './home/gethistory/gethistory.component';

const registerRoute:Route={path:'register',component:RegisterComponent};
const homeRoute:Route={path:'home',component:HomeComponent,canActivate:[AppGuard],children:[{path:'add',component:AddComponent},{path:'logout',component:LogoutComponent},
{path:'search',component:SearchComponent},{path:'history',component:GethistoryComponent}]};
const aboutRoute:Route={path:'about',component:AboutComponent};
const wrongPath:Route={path:'**',pathMatch:'full',redirectTo:'/sinein'};
const sineupRoute:Route={path:'sineup',component:SineupComponent};
const sineinRoute:Route={path:'sinein',component:SineinComponent};

const routes: Routes = [registerRoute,homeRoute,aboutRoute,sineinRoute,sineupRoute,wrongPath];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
