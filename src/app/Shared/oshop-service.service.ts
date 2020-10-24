import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OshopServiceService {
  private url='https://localhost:44370/api/Category';

  constructor(private http:HttpClient) {

   }
   
  getCategory(){
    return this.http.get(this.url);
  }
}
