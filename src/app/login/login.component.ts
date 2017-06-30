import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(public router: Router ,private loginService: LoginService) {}

  ngOnInit() {
  }

    login(event, username, password) {
    event.preventDefault();
    this.loginService.login(username, password)
                     .subscribe(
                       response => {
                        localStorage.setItem('token', response.access_token);
                        this.router.navigateByUrl('/home');
                       },
                       error => {
                        alert(error);
                       }
                     );
 }

}

