import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { environment } from "environments/environment";
@Component({
  selector: 'app-product-reg',
  templateUrl: './product-reg.component.html',
  styleUrls: ['./product-reg.component.css']
})
export class ProductRegComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: Http) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      price: [0.0],
      category: ['']
    });
  }

  saveProduct() {
    if (this.form.valid) {
      this.http.post(environment.apiPath+"save-product",this.form.value)
      .subscribe(res=> {
        let data = res.json();
        if(data.status){
          alert("Form saved");
          this.form.reset();
        }else {
          alert("Failed to save the form");
          console.log(data);
        }
      });
    }
  }

}
