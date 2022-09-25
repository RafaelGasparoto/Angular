import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url = 'http://localhost:3001/products'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      )
  }

  readById(id: string): Observable<Product>{
    const url = `${this.url}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)))
  }

  updateProduct(product: Product): Observable<Product>{
    const url = `${this.url}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)))
  }

  deleteProduct(id: string): Observable<Product>{
    const url = `${this.url}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)))
  }
  
  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'undo', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler(e: any): Observable<any>{
    // PODERIA USAR e PARA FAZER UM TRATAMENTO DO ERRO
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }

}
