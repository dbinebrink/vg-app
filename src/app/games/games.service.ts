import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})  
export class GamesService {
    private dataFormat: string = 'json';
    private apiKey: string = '18d9156ca88a5d01297a4718912219e86c95bd82';
    private gamesUrl = 'https://www.giantbomb.com/api/search/?resources=game&format=' + this.dataFormat + '&api_key=' + this.apiKey + '&query=';

    constructor(private http: HttpClient) {}
      
    getNewGamesList(newString: string): Observable<any[]> {
        return this.http.get<any[]>(this.gamesUrl + newString);
    }
}
