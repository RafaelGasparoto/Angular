import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   product: Product = {
    name: 'dsa',
    price: 10
  }
  
  url = 'http://localhost:3001/products'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  createProduct(): Observable<Product>{
    return this.http.post<Product>(this.url, this.product);
  }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'undo', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    })
  }
  
}
