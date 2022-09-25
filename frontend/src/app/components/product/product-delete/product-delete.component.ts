import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product!: Product

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product.id.toString()).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!!!')
      this.route.navigate(['/products'])
    })
  }

  cancel(): void{
    this.route.navigate(['/products'])
  }

}
