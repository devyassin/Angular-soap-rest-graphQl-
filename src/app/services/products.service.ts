import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/interface/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private endpoint =`${environment.API_SOAP}/products`;  
  constructor(private http: HttpClient) { }

   // Get all products
   getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }


  // Add a new product
  addProduct(product: Product): Observable<boolean> {
    return this.http.post<boolean>(this.endpoint, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Update an existing product
  updateProduct(code: number | null, product: Product): Observable<void> {
    return this.http.put<void>(`${this.endpoint}/${code}`, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Delete a product by code
  deleteProduct(code: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.endpoint}/${code}`);
  }

  // Calculate selling price
  calculateSellingPrice(price: number): Observable<number> {
    return this.http.get<number>(`${this.endpoint}/sellingPrice/${price}`);
  }
}
