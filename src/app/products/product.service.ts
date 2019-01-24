import { Injectable } from '@angular/core';

import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// SERVICES are injectable, just another class though, a service type of class
@Injectable({
    providedIn: 'root'  // can inject throughout the whole app
})  
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> { // this returns an OBSERVABLE, which is a STREAM that contains an ARRAY 
        return this.http.get<IProduct[]>('/assets/products.json');
    }
}
