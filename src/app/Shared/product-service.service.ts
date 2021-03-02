import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private url = 'https://localhost:44370/api/Product';

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(this.url);
  }
  saveProduct(newProduct) {
    return this.http.post(this.url, newProduct, {headers: new  HttpHeaders({'Content-Type':'application/json'})});
  }
}
