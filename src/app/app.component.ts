import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from './service/rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'credloan';
  constructor(private router:Router, private rs:RestServiceService){}
  toLogin(){
    this.rs.msg = null;
    this.router.navigateByUrl("/Login");
  }
}
