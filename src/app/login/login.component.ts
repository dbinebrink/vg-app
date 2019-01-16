import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  login(): void {
    console.log(this.username);
    console.log(this.password);

    if(this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["products"]);
      // add a logout link to the navbar, remove the log in button
    }
    else {
      alert("Hey man, invalid username and password");
    }
  }

}
