import { Component, OnInit } from '@angular/core';
import { IGame } from './games';
import { GamesService } from './games.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: IGame[] = [];  
  myWelcomeString: string = "Welcome, enter a new game to search for.";

  loadingGoing: boolean;

  constructor(private gamesService: GamesService, private http: HttpClient) { }

  getNewGames(newQuery: string):void {
    this.loadingGoing = true;

    this.gamesService.getNewGamesList(newQuery).subscribe(  // subscribe to the observable
      games => {
        this.loadingGoing = false;
        this.games = games;  // this is the json response subscription
      }
    );
  }

  ngOnInit(): void {
    this.getNewGames('mario');  // if you want to show a default list of games
  }
}
