import { Router } from '@angular/router';
import { ProductService } from './../product.service'
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: undefined
  }
  constructor(private route: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
  }


  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(()=> {
      this.productService.showMessage('Produto criado com sucesso!!!')
      this.route.navigate(['/products'])
    })
  }

  cancel(): void{
    this.route.navigate(['/products'])
  }

}
