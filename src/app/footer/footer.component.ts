import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="container-fluid">
              <p>{{ footerTitle }}</p>
             </footer>`,
  styles: [`footer { 
              padding: 10px 20px; 
              background: #003366; 
              color: #fff;
            }`]
})
export class FooterComponent implements OnInit {
  footerTitle = 'Footer here';

  constructor() { }

  ngOnInit() {
  }

}
