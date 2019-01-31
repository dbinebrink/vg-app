import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faCartPlus = faCartPlus;
  stillLoading: boolean = false;

  constructor(private authService: AuthService) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;   // the auth service should provide us with the logged in status, NOT the navbar itself
  }

  get userName(): string {
    if (this.authService.currentUser) {  // the auth service provides us with the currentUser info, not the navbar
      return this.authService.currentUser.userName;
    }
    return '';
  }

  public navitems = [  
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

  ngOnInit() {
  }

}
