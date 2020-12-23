import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeCart(product) {
    this.items = this.items.filter(item => item.id != product.id);
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
