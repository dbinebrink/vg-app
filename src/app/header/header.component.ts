import { Component, OnInit } from '@angular/core';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle = 'Angular Test App';
  faAtom = faAtom;

  constructor(private authService: AuthService) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;   // the auth service should provide us with the logged in status, NOT the navbar itself
  }
  
  ngOnInit() {
  }

}
