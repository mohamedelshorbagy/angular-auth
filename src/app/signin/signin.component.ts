import { Component, OnInit } from '@angular/core';
import { AllService } from '../service/all.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private all:AllService) { }

  ngOnInit() {
  }
  login(data) {
    let email = data.value.email;
    let password = data.value.password;
    this.all.getData(email , password);

  }



}
