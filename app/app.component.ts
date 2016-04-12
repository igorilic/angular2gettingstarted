import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { ProductListComponent } from './products/product.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductService } from './products/product.service';



@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, ProductListComponent, WelcomeComponent],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/welcome',
        name: 'Welcome',
        component: WelcomeComponent,
        useAsDefault: true
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductListComponent
    }
])
export /**
 * AppComponent
 */
class AppComponent {
    pageTitle: string = 'Acme Product Management';
    
}