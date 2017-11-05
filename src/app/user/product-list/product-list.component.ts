import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products;
  constructor(private http: Http) { }

  ngOnInit() {
    this.fetchProduts();
  }

  fetchProduts() {
    this.http.get(environment.apiPath + "products")
      .subscribe(res => {
        this.products = res.json().products;
      })
  }

}
