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
    private productUrl = '/assets/products.json';

    // SYRINGES are used by the whole CLASS
    constructor(private http: HttpClient) {
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
