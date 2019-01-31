import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;

  constructor(private authService: AuthService, private router: Router) {
    // subscribe to the routing observable on init the app to determine app-wide when to show spinner
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    })
  }

  checkRouterEvent(routerEvent: Event): void {
    if(routerEvent instanceof NavigationStart) {  
      this.loading = true;  // spinner appears when routing begins
    }

    if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
      this.loading = false;  // spinner goes away when routing begins
    }
  }

  // check for LOGGED IN STATUS app-wide, right from the get go and every page!
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }
  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/logout');
    console.log('Log out');
  }
}
