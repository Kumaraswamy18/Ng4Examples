import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ LoginService ]
})
export class HomeComponent implements OnInit {

  constructor(public router: Router ,private loginService: LoginService) {}

  ngOnInit() {
  }
  logout(){
        this.loginService.logout();
        this.router.navigateByUrl('/login');
    }

}
