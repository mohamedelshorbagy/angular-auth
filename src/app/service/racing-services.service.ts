import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()



export class RacingServicesService {

  

  constructor(private http:Http) { }



  getData() {

    return this.http.get('https://jsonplaceholder.typicode.com/photos').map((res) => res.json());

  }










}
