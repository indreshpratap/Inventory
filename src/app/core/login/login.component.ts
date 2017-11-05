import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "app/core/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  doLogin() {
    localStorage.removeItem("session_token");
    this.auth.doLogin({ name: this.username, password: this.password })
      .subscribe(res => {
        if (res.status) {
          this.router.navigate(['']);
        } else {
          alert('Failed to login please try again');
        }
      });
  }

}
