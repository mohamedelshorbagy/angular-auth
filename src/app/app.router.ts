import { ModuleWithProviders } from '@angular/core';  
import { Routes , RouterModule } from '@angular/router';  
import { AuthguardService } from './service/authguard.service';


// Importing All Components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';   


export const router:Routes = [
    {path:'', redirectTo:'home',pathMatch:'full' },
    {path: 'home' , component:HomeComponent},
    {path: 'about' , component:AboutComponent},
    {path: 'about/:id' , component:AboutComponent},
    {path: 'signup' , component:SignupComponent},
    {path:'signin' , component:SigninComponent},
    {path:'dashboard' , component:DashboardComponent , canActivate:[AuthguardService]}
]


export const routes:ModuleWithProviders = RouterModule.forRoot(router);