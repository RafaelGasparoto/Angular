import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackbar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'undo', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    })
  }
  
}
