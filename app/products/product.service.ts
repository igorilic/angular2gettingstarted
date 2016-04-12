import { Injectable } from 'angular2/core';
import { IProduct } from './products';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export /**
 * ProductService
 */
class ProductService {
    private _productsUrl: string = 'api/products.json';
    constructor(private _http: Http){}
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productsUrl)
                    .map((response: Response) => response.json())
                    .do(data => console.log('All: '+ JSON.stringify(data)))
                    .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}