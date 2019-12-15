import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    // 作成したサービスを注入
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // products配列が0スタートなので-1する(微妙？)
      this.product = products[+params.get('productId')-1];
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this,this.cartService.addToCart(product);
  }

}
