import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {
    path: 'signup', component: UserComponent,
    children: [{path: '', component: SignupComponent}]
  },
  {
    path: 'login', component: UserComponent,
    children: [{path: '', component: LoginComponent}]
  },
  { path: '', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
