import { ProductServiceService } from './../../Shared/product-service.service';
import { OshopServiceService } from './../../Shared/oshop-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;

  productForm = new FormGroup
  ({
    ProductTitle: new FormControl(''),
    Price: new FormControl(''),
    CategoryID: new FormControl(''),
    ImageURL: new FormControl(''),
  });

  constructor(
    private categoryService: OshopServiceService,
    private productService: ProductServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getCategory();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.productService
      .saveProduct(this.productForm.value)
      .subscribe((res) => {
        this.toastr.success("Product Added Successfully","OShop");

      });
  }
}
