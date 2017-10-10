import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService, Product } from '../services/product.service';
import { fadeInAnimation, multiStepFlyOut } from '../animations/animations';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';



@Component({
  moduleId: module.id.toString(),
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
  animations: [trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])]
})
export class ProductsComponent implements OnInit, OnDestroy {
    public products: Product[];
    public subscription: Subscription;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.loadProducts();
        this.subscription = this.productService.on('products-updated').subscribe(() => this.loadProducts());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public deleteProduct(id: number): void {
        this.productService.delete(this.products, id);
    }

  public animationStarted(event: AnimationEvent) {
    console.warn('Animation started: ', event);
  }

  public animationDone(event: AnimationEvent) {
    console.warn('Animation done: ', event);
  }

    private loadProducts(): void {
        this.products = this.productService.getAll();
    }

}
