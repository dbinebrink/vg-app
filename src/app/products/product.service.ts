import { Injectable } from '@angular/core';

import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// SERVICES provide OBSERVABLE SYRINGES, all services are injectable, and should be in a separate file, it's a class
@Injectable({
    providedIn: 'root'  // this injects the Service Syringe into the Root (Trunk) of the tree
})  
export class ProductService {

    // TODO: api key for IGDB is 
    // Request URL
    // https://api-endpoint.igdb.com
    // App name
    // Dan Binebrink's App
    // Key
    // ef75a479023be8ff1b51a01a312c0cc5
    // Add this as a user-key parameter to your API calls to authenticate.
    
    // Request URL
    // https://api-v3.igdb.com
    // App name
    // Dan Binebrink's App (v3)
    // Key
    // 34ebce2b3f3c30449a7b30c6e6ba4ce0
    // Add this as a user-key parameter to your API calls to authenticate.
    

    private productUrl = '/assets/products.json';  // change this to an external URL
    
    constructor(private http: HttpClient) {  // SYRINGES are used by the whole CLASS
    }

    // get products returns an OBSERVABLE ARRAY as a SERVICE
    // in other words the Product Service RETURNS AN OBSERVABLE, THE WHOLE POINT OF THIS SERVICE IS WHAT THIS METHOD RETURNS
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}

