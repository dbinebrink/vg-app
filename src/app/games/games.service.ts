import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})  
export class GamesService {
    private gamesUrl = '//www.giantbomb.com/api/search/?resources=game&format=jsonp&api_key=18d9156ca88a5d01297a4718912219e86c95bd82&query=';

    constructor(private http: HttpClient) {}
      
    getNewGamesList(newString: string): Observable<any[]> {
        let headerOptions = {                                                                                                                                                         
            headers: new HttpHeaders({
                // 'Content-Type': 'application/jsonp',
                // 'Cross-Domain': 'true',
                // 'Data-Type': 'jsonp'
            }), 
        };

        return this.http.get<any[]>(this.gamesUrl + newString, headerOptions);
    }
}
