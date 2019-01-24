import { Component, OnInit } from '@angular/core';
import { IGame } from './games';
import { GamesService } from './games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: IGame[] = [];  // initialize an array ready for the list
  filteredGames: IGame[];

  searchKeyword: string;
  _gamesFilter: string;

  get gamesFilter(): string { return this._gamesFilter; }
  set gamesFilter(value:string) {
    this._gamesFilter = value; 
    this.filteredGames = this.gamesFilter ? this.performFilter(this.gamesFilter) : this.games;
  }

  performFilter(keyword: string): IGame[] {

    keyword = keyword.toLocaleLowerCase();  // what was their keyword filter? set to lowercase, just in case ALL CAPS

    // filter needs an ARRAY below, not a string, it is CHOKING here
    console.log(Array.isArray(this.games));  // filter will not work! it needs an array below or get an error
    return this.games.filter((games: IGame) =>  
      games.name.toLocaleLowerCase().indexOf(keyword) !== -1);
  }

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGamesList().subscribe(
      games => {
        this.games = games;  // this is the json response subscription
      }
    );
  }
}
