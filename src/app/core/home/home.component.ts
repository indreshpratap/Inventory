import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/core/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(res => {
      if (!res) {
        this.router.navigate(['login']);
      }
    });
  }

  doLogout() {
    this.auth.doLogout().subscribe(res=> {
      this.router.navigate(['login']);
    });
  }

}
