import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})  
export class GamesService {

    private apiKey = "18d9156ca88a5d01297a4718912219e86c95bd82";
    public queryString = "sonic";

    private gamesUrl = '//www.giantbomb.com/api/search/?api_key=' 
        + this.apiKey + '&format=json'  + '&query=' + this.queryString + '&resources=game';  

    constructor(private http: HttpClient) {}

    getGamesList(): Observable<any[]> {
        return this.http.get<any[]>(this.gamesUrl);
    }
}
