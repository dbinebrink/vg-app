import { Injectable } from '@angular/core';

import { User } from '../login/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;  // this is the most critical part is WHO IS THE CURRENT USER, DEFINE AND OBJECT FOR THEM

  constructor(private router: Router) { }

  get isLoggedIn(): boolean {
    return !!this.currentUser;  // by default, this is false, until the person logs in
  }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      alert('Hi there, you need to enter a username and password, this message brought to you by _services/AuthService');
      return;
    }

    if (userName === 'admin' && password === 'admin') {
      console.log('hello admin')
      this.currentUser = { id: 1, userName: userName, isAdmin: true };  // admin is #1
      this.router.navigate(['/user-welcome']);      
      return;  // stop executing and go back
    }
    else if (userName.length && password.length) {
      console.log('hello regular user')
      this.currentUser = { id: 2, userName: userName, isAdmin: false };  // anyone else is #2
      this.router.navigate(['/user-welcome']);  
    }
  }
 
  logout(): void {
    console.log('the user is now logged out');
    this.currentUser = null;
    // this.isLoggedIn = false;
    this.router.navigate(['/logout']);
  }
}
