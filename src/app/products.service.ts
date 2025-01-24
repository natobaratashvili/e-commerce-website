import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise-canceling feature.",
        price: 99.99,
        imageUrl: "products/img1.jfif",
        count: 1
    },
    {
        id: 2,
        name: "Smartphone",
        description: "A sleek smartphone with a large display and powerful camera.",
        price: 699.99,
        imageUrl: "products/img2.jfif",
        count: 1
    },
    {
        id: 3,
        name: "Laptop",
        description: "A lightweight laptop with a long-lasting battery and fast processor.",
        price: 1299.99,
        imageUrl: "products/img3.jfif",
        count: 1
    },
    {
        id: 4,
        name: "Smartwatch",
        description: "A smart and stylish watch with fitness tracking and notifications.",
        price: 199.99,
        imageUrl: "products/img6.webp",
        count: 1
    },
    {
        id: 5,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with adjustable sensitivity.",
        price: 29.99,
        imageUrl: "products/img5.jpg",
        count: 1
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
        price: 49.99,
        imageUrl: "products/img6.webp",
        count: 1
    }
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
  getProductByName(name: string) {
    return this.products.find(product => product.name === name);
  }
  filterProductsByName(filterText: string) {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
