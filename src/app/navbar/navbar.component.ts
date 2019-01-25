import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faCartPlus = faCartPlus;
  stillLoading: boolean = false;

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
      label: 'Game List',
      url: '/games',
      title: 'Go to Game List page'
    },
    {
      label: 'Dashboard D3',
      url: '/dashboard',
      title: 'Go to Dashboard page'
    },
    {
      label: 'About',
      url: '/about',
      title: 'Go to About page'
    },
    {
      label: 'Contact',
      url: '/contact',
      title: 'Go to Contact page'
    }
  ];

  constructor() { }

  ngOnInit() {
    // hide the #loader on index.html

  }

}
