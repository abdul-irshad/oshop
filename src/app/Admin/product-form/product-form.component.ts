import { ProductServiceService } from './../../Shared/product-service.service';
import { OshopServiceService } from './../../Shared/oshop-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< .merge_file_a11728
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
=======
>>>>>>> .merge_file_a07176

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
<<<<<<< .merge_file_a11728
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
=======
  categories$:Observable<any>; 

  constructor(private service: OshopServiceService) {}

  ngOnInit() {
  this.categories$= this.service.getCategory()
  }
>>>>>>> .merge_file_a07176
}
