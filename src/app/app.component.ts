import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-main',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(private productService: ProductService) {
        // add some initial products
        if (productService.getAll().length === 0) {
            productService.save({ name: 'Jimmy Johns Pickle', price: '25.00', id: 1 });
            productService.save({ name: 'Goat', price: '1.50', id: 2 });
            productService.save({ name: 'Sumo Suit', price: '12.95', id: 3 });
        }
    }
}
