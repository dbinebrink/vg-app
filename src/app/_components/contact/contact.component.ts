import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // useless, delete this junk
  industries = [{ id: 1, name: "Agriculture" }, { id: 2, name: "Manufacturing" }, { id: 3, name: "Energy" }, { id: 4, name: "Transportation" }, { id: 5, name: "Finance" }];
  submitCompany(form){
    console.log(form.value);
    alert("The form was submitted"); // fix this
    form.reset();
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;   // the auth service should provide us with the logged in status, NOT the navbar itself
  }
  
}
