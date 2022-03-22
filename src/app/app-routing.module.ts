import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PackagesComponent } from './packages/packages.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes:Routes = [
  {
    path:'home',component:HomeComponent 
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'packages', component:PackagesComponent
  },
  {
    path:'profile', component:ProfileComponent
  },
  {
    path:'booking', component:BookingComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'mybookings', component:MybookingsComponent
  },
  {
    path:'logout', component:LogoutComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}