import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/core/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    // this.auth.isLoggedIn().subscribe(res => {
    //   if (!status) {
    //     this.router.navigate(['login']);
    //   }
    // });
  }

}
