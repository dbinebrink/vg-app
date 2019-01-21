import { Injectable } from '@angular/core';

import { IUserList } from './user-list';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})  
export class UserListService {

    // private userListUrl = 'https://api.nasa.gov/planetary/apod?api_key=7WqB2NYW6K9cLyq4Uk1ZZ7LYO3hPufVQtVJI5Wgn&date=1999-04-03';  // the IUserList INTERFACE has to match this
    private userListUrl = 'https://reqres.in/api/users?per_page=12';  // the IUserList INTERFACE has to match this

    constructor(private http: HttpClient) {
    }

    // the meat of this service is this method, the first two lines are all that matter, get and return
    getUserList(): Observable<IUserList[]> {
        return this.http.get<IUserList[]>(this.userListUrl).pipe(
            // tap(data => console.log('JSON response: ' + JSON.stringify(data))),  // TAP() function here to show you the JSON in console.log, TAP into the GOD STREAM
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

