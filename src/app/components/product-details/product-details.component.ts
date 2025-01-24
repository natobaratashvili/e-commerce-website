import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any ;

  constructor(private route: ActivatedRoute, 
              private productsService: ProductsService) { }

  ngOnInit() {  
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getProductById(productId); 
  }

}