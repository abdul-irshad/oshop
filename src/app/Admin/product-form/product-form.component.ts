import { OshopServiceService } from './../../Shared/oshop-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl:'./product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(private service:OshopServiceService) { }

  ngOnInit() {
    this.categories$= this.service.getCategory()
    //console.log(this.categories$);
    //.subscribe(response=>{
    //   console.log(response);
    //   this.categories$=response;
    //   console.log(this.categories$);

    // });
  }

}
