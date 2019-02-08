import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;  // firebase

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {   // firebase fb and af
    this.createForm();   // firebase
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




  ngOnInit() {
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;   // the auth service should provide us with the logged in status, NOT the navbar itself
  }
  
}
