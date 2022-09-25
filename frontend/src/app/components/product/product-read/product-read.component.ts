import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService,
    private route: Router) { }

  ngOnInit(): void {
    this.productService.readProduct().subscribe( products => {
      this.products = products
    })
  }
  
  navigateToProductEdit(id: string): void {
    this.route.navigate([`products/update/${id}`])
  }
}
