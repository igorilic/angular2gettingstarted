import { Component, OnInit } from 'angular2/core';
import { IProduct } from './products';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
import { ROUTER_DIRECTIVES, RouterLink, RouteParams } from 'angular2/router';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
    
})

export /**
 * ProductListComponent
 */
class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService,
                private _routeParams: RouteParams) {
        console.log(this._routeParams.get('id'));                
    }
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    errorMessage: string;
    products: IProduct[];
    
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            );
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    onRatingClicked(message: string): void {
        console.log(message);
    }
}