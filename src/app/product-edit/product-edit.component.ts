import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { slideInOutAnimation, colorChange } from '../animations/animations';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.less'],
  animations: [slideInOutAnimation, colorChange],
  host: { '[@slideInOutAnimation]': '' }
})
export class ProductEditComponent implements OnInit {
    public title: string;
    public labelisHidden: boolean;
    public product: Product = {name: '', price: '', id: 0};
    public state: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService) { this.title = 'Add Product'; this.labelisHidden = true; }

    ngOnInit() {
        const productId: number = Number(this.route.snapshot.params['id']);
        if (productId) {
            this.title = 'Edit Product';
            const product: Product | undefined = this.productService.getById(productId);
            if (product) { this.product = product; }
        }
    }

    public toggleLabelState(isHidden: boolean): void {
        this.labelisHidden = isHidden;
        this.labelisHidden ? this.state = 'in' : this.state = '';

    }

    public saveProduct() {
        this.productService.save(this.product);
        this.router.navigate(['products']);
        this.productService.publish('products-updated');
    }

}
