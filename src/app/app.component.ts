import { Component , OnInit} from '@angular/core';
import { RacingServicesService } from './service/racing-services.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data:any;
  user= false;

  constructor(private rc:RacingServicesService) {


  }
  

  ngOnInit() {
        //   this.rc.getData().subscribe((res) => {
        //         this.data = res;
        //         console.log(this.data);
        //  })
  }


}