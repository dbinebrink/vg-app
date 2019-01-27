import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GamesService {
    // private dataFormat: string = 'json';
    private dataFormat: string = 'json';
    private apiKey: string = '18d9156ca88a5d01297a4718912219e86c95bd82';
    private gamesUrl = 'https://www.giantbomb.com/api/search/?resources=game&format=' 
        + this.dataFormat + '&api_key=' + this.apiKey + '&query='; 

    constructor(private http: HttpClient) {}

    getNewGamesList(newString: string): Observable<any[]> {

        // let url = 'https://www.giantbomb.com/api/search/?resources=game&format=jsonp&api_key=18d9156ca88a5d01297a4718912219e86c95bd82&query=mario&json_callback=JSONP_CALLBACK';

        // CHANGE TO IGDB, GIANTBOMB API IS TOO ANNOYING
        return this.http.get<any[]>(this.gamesUrl + newString);
        // return this.http.get<any[]>('https://www.giantbomb.com/api/search/?resources=game&format=jsonp&api_key=18d9156ca88a5d01297a4718912219e86c95bd82&query=mario&json_callback=JSONP_CALLBACK');
        
        // request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>
    }
}


/* 
Request URL
https://api-endpoint.igdb.com
App name
Dan Binebrink's App
Key
ef75a479023be8ff1b51a01a312c0cc5
Add this as a user-key parameter to your API calls to authenticate.

Request URL
https://api-v3.igdb.com
App name
Dan Binebrink's App (v3)
Key
34ebce2b3f3c30449a7b30c6e6ba4ce0
Add this as a user-key parameter to your API calls to authenticate.

*/