import { Injectable } from '@angular/core';

import { IUserList } from './user-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserListService {

    private userListUrl = 'https://reqres.in/api/users?per_page=10';  // the IUserList INTERFACE has to match this

    constructor(private http: HttpClient) { }

    getUserList(): Observable<IUserList[]> {
        return this.http.get<IUserList[]>(this.userListUrl);
    }

}

