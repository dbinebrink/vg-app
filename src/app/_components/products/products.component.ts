import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  filteredProducts: IProduct[];
  sortedProducts: IProduct[];

  _productFilter: string;   

  get productFilter(): string { return this._productFilter; }
  set productFilter(value: string) {
    this._productFilter = value;
    this.filteredProducts = this.productFilter ? this.performFilter(this.productFilter) : this.products;  
  }  

  performFilter(keyword: string): IProduct[] {
    keyword = keyword.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.title.toLocaleLowerCase().indexOf(keyword) !== -1);   
  }
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {  // on init, get the products
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      }
    );
  }

  sortBy(str: string): void {  
    this.productService.getProducts().subscribe(
      products => {
        this.products = products.sort((a, b) => (a[str] > b[str] ? 1 : -1));
        this.filteredProducts = this.products;
      }
    );
  }

}
