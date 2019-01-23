import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loggedIn: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedIn = false;
  }

  login(): void {
    if(this.username == 'admin' && this.password == 'admin') {
      this.loggedIn = true;
      this.router.navigate(["user-welcome"]);
    }
    else {
      let el = document.getElementById("error-box");
      el.innerHTML = "Username or password is incorrect, please try again.";
      el.style.display = 'block';
    }
  }
}
