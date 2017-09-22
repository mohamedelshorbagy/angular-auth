import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/Rx';
import { Router } from '@angular/router'
@Injectable()
export class AllService {
tracker:boolean;
  constructor(private http:Http,private router:Router) { }
    


  getUser(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).map((res) => res.json());

  }

  getData(email, password) {
    let data = JSON.stringify({
      email: email,
      password:password,
      flag: true
    })
    localStorage.setItem('userData',data);

    this.router.navigate(['/dashboard']);
  

  }

  getUserDataFromStorage() {
    let data = localStorage.getItem('userData');
    if(data) {
      return JSON.parse(data);
    } else {
      this.router.navigate(['/signin']);
      return {
        msg: 'You Are Not Logged In',
        flag: false
      }

    }

  }


  isLoggedIn() {
    if(!localStorage.getItem('userData')) {
      this.tracker = false;
      return this.tracker;

    } else {
      this.tracker = true;
      return this.tracker;
    }
  }

  logOut() {
    localStorage.removeItem('userData');
    this.router.navigate(['/home']);
    return false;
  }



}

