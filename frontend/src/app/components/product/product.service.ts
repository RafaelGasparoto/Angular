import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url = 'http://localhost:3001/products'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url, product);
  }

  readProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  readById(id: string): Observable<Product>{
    const url = `${this.url}/${id}`
    return this.http.get<Product>(url);
  }

  updateProduct(product: Product): Observable<Product>{
    const url = `${this.url}/${product.id}`
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: string): Observable<Product>{
    const url = `${this.url}/${id}`
    return this.http.delete<Product>(url)
  }
  
  showMessage(msg: string): void {
    this.snackbar.open(msg, 'undo', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    })
  }
  
}
