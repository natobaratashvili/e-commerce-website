import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems : any [] = [];


  constructor(private cartService: CartService) { 
  }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId);
    this.cartItems = this.cartService.getItems();
  }

  getTotalAmount() {
    return this.cartItems.reduce((acc, item) => acc + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  }

}
