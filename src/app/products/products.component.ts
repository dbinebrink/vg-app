import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	_searchFilter: string;
	get searchFilter(): string {
		return this._searchFilter;
	}
	set searchFilter(value:string) {
		this._searchFilter = value;
		this.filteredProducts = this._searchFilter ? this.performFilter(this._searchFilter) : this.products;
	}


  constructor() { }

  ngOnInit() {
  }

}
