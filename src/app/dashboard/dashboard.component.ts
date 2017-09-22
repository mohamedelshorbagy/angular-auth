import { Component, OnInit } from '@angular/core';
import { AllService } from '../service/all.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any;
  constructor(private all:AllService) { }

  ngOnInit() {
    this.data = this.all.getUserDataFromStorage();
  }

}
