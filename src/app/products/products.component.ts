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
    this.filteredProducts = this.productFilter ? this.performFilter(this.productFilter) : this.products;  // if there is a product filter, perform the filter, otherwise show all
  }  // for search keywords, always use a getter/setter trend

  performFilter(keyword: string): IProduct[] {
    keyword = keyword.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.title.toLocaleLowerCase().indexOf(keyword) !== -1);   
  }
  
  constructor(private productService: ProductService) {  // set default values in the class constructor
  }

  ngOnInit(): void {
  // this get products service and method returns a GOD STREAM, that cannot be contained in a variable, YOU MUST SUBSCRIBE
  // first get the products, but we want the filtered products next
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
        console.log(this.products);
      },
      error => this.errorMessage = <any>error
    );
  }

  editProduct(): void {
  }

  deleteProduct(): void {
  }
}
