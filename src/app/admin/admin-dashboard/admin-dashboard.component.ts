import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from "environments/environment";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get(environment.apiPath+"protected").subscribe(res=> {
      console.log(res);
    })
  }

}
