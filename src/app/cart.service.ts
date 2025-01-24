import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  constructor() { }

  addToCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.count += 1; 
    } else {
      this.items.push({ ...product, count: 1 }); 
    }
    this.updateLocalStorage();
  
  }

  getItems() {
    this.loadDataFromLocalStorage();
    return this.items;
  }

  removeItem(id: number) {
    this.items = this.items.filter((item: any) => item.id !==id);
    this.updateLocalStorage();
  }

 private updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  loadDataFromLocalStorage(){
    const cart = localStorage.getItem('cart');
    if(cart){
      this.items = JSON.parse(cart);
    }
  }

}
