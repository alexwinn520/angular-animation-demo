import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductService {
    private subjects: Subject<any>[] = [];

    public publish(eventName: string): void {
        this.subjects[eventName] = this.subjects[eventName] || new Subject<any>();
        this.subjects[eventName].next();
    }

    public on(eventName: string): Observable<any> {
        this.subjects[eventName] = this.subjects[eventName] || new Subject<any>();
        return this.subjects[eventName].asObservable();
    }

    public getAll(): Product[] {
        return this.getProducts();
    }

    public getById(id: number): Product | undefined {
        return this.getProducts().find(product => product.id === id);
    }

    public save(product: Product): void {
        const products: Product[] = this.getProducts();
        if (products.find((p: Product) => p.id === product.id) !== undefined) { return; }
        else {
          const lastProduct: Product = products[products.length - 1] || { id: 0 };
          product.id = lastProduct.id + 1;
          products.push(product);
          this.setProducts(products);
        }
    }

    public delete(products: Product[], id: number) {
        const productIndex: number = products.findIndex((p: Product) => p.id === id);
        if (productIndex !== -1) { products.splice(productIndex, 1); }
        this.setProducts(products);
    }

    private getProducts(): Product[] {
        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify([]));
        }
        const storedProducts: string | null = localStorage.getItem('products');
        return storedProducts ? JSON.parse(storedProducts) : [];
    }

    private setProducts(products: any[]): void {
        localStorage.setItem('products', JSON.stringify(products));
    }
}

export interface Product {
  name: string;
  price: string;
  id: number;
}
