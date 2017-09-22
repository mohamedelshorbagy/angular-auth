import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService } from '../service/all.service'; 




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user:any;
  id:any;
  data:any;

  constructor(private route:ActivatedRoute,private all:AllService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.getUser(this.id);

    // To Load the New Data
    this.route.params.subscribe(
      (params) => {
        this.id = params['id'];
        this.getUser(this.id);
      }
    )
    
    localStorage.removeItem('data');
    


}

  // Make the Calling API Based on ID Number
  getUser(id) {

    this.all.getUser(id).subscribe((res) => {
      this.user = res;

    })

  }




}
