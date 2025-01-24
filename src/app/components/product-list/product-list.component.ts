import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { FilterService } from '../../filter.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products : any[]  = [];
  filteredProducts: any[] = []; 
  filterText: string = ''; 

  constructor(private productsService:ProductsService, private filterService: FilterService, private cartService : CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;

    this.filterService.filterText$.subscribe(filterText => {
      this.filterText = filterText;
      this.filterProducts();
    });
  }

  filterProducts() {
    this.filteredProducts = this.productsService.filterProductsByName(this.filterText);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
