import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    // private gamesUrl = 'https://www.giantbomb.com/api/search/?resources=game&format=json&api_key=18d9156ca88a5d01297a4718912219e86c95bd82&query=';
    private gamesUrl = 'https://api-endpoint.igdb.com';

    constructor(private http: HttpClient) {}

    getNewGamesList(newString: string): Observable<any[]> {
        const headerDict = {
            'Accept': 'application/json',
            'user-key': '34ebce2b3f3c30449a7b30c6e6ba4ce0'
        }
        const requestOptions = {                                                                                                                                                         
            headers: new Headers(headerDict)
        }; 
        this.gamesUrl = this.gamesUrl + newString;
        return this.http.get<any[]>(this.gamesUrl);
    }
}


/* 
Request URL
https://api-endpoint.igdb.com
Key
ef75a479023be8ff1b51a01a312c0cc5
Add this as a user-key parameter to your API calls to authenticate.

Request URL
https://api-v3.igdb.com
Key
34ebce2b3f3c30449a7b30c6e6ba4ce0
Add this as a user-key parameter to your API calls to authenticate.
*/