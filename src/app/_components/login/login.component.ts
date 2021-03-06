import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: boolean = false;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);
      this.router.navigate(['/user-welcome']);
    } 
    else {
      let el = document.getElementById("error-box");
      el.innerHTML = "Username or password is incorrect, please try again.";
      el.style.display = 'block';
    }

  }
}
