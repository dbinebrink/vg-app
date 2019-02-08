import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { fadeInAnimation } from './app.animation';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeInAnimation ]
})
export class AppComponent {
  loading = true;

  form: FormGroup;  // firebase
  stillLoading: boolean = false; // firebase

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {   // firebase fb and af
    this.createForm();   // firebase

    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);  // subscribe to the routing observable determine app-wide to show spinner
    })
  }
  
  // FIREBASE STUFF HERE
  // FIREBASE STUFF HERE
  createForm() {  // firebase whole thing
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  onSubmit() {   // firebase whole thing
    console.log('a form has been submitted. check the firebase database.')
    const {name, email, message} = this.form.value;
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Message: ${message}</div>
    `;
    let formRequest = { name, email, message, html };
    this.db.list('/messages').push(formRequest);
    this.form.reset();
    alert('Form is submitted. Thanks.');
  }
  // FIREBASE STUFF ENDS HERE
  // FIREBASE STUFF ENDS HERE


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

  logIn(): void {
    this.router.navigate(['/user-welcome']);      
  }

  logOut(): void {  // notice the camelCase in the component
    this.authService.logout();
    this.router.navigateByUrl('/logout');
    console.log('Log out');
  }
}
