import { Injectable } from '@angular/core';
import { Router , CanActivate } from '@angular/router'; 
import { AllService } from './all.service';
@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private all:AllService,private router:Router) { }

  canActivate() {
    if(this.all.isLoggedIn()) {
      
      return true;


    } else {
      this.router.navigate(['/signin']);
      return false;
    }

  }

}
