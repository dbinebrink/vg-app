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

  _productFilter: string;   
  errorMessage: any;

  get productFilter(): string {
    return this._productFilter;
  }
  set productFilter(value:string) {
    this._productFilter = value;
    this.filteredProducts = this.productFilter ? this.performFilter(this.productFilter) : this.products;  // if filter word exists, perform the filter, otherwise show all
  }  

  performFilter(keyword: string): IProduct[] {
    keyword = keyword.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.title.toLocaleLowerCase().indexOf(keyword) !== -1);   
  }
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }

}
