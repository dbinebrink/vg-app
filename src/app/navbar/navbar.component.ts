import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navitems = [
    {
      label: 'Home',
      url: '/home',
      title: 'Go to Home page'
    },
    {
      label: 'Products',
      url: '/products',
      title: 'Go to Products page'
    },
    {
      label: 'About',
      url: '/about',
      title: 'Go to About page'
    },
    {
      label: 'User List',
      url: '/user-list',
      title: 'Go to User List page'
    },
    {
      label: 'Contact',
      url: '/contact',
      title: 'Go to Contact page'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
