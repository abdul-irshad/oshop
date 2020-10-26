import { OshopServiceService } from './../../Shared/oshop-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$:Observable<any>; 

  constructor(private service: OshopServiceService) {}

  ngOnInit() {
  this.categories$= this.service.getCategory()
  }
}
