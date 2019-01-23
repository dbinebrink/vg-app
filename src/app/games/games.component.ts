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

  _gamesFilter: string;

  get gamesFilter(): string {
    return this._gamesFilter;
  }
  set gamesFilter(value: string) {
    this._gamesFilter = value; // if filter word exists, perform the filter, otherwise show all
    this.filteredGames = this.gamesFilter ? this.performFilter(this.gamesFilter) : this.games;
  }

  performFilter(keyword: string): IGame[] {
    keyword = keyword.toLocaleLowerCase();
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
