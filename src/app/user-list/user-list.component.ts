import { Component, OnInit } from '@angular/core';
import { IUserList } from './user-list';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: IUserList[] = [];  // this line initializes a users array variable of type IUserList
  errorMessage: any;

  constructor(private userListService: UserListService) {  // set default values in the class constructor
  }

  ngOnInit(): void {
    this.userListService.getUserList().subscribe(
      users => {
        this.users = users;
        // we are getting a JSON object, not an array, we need an array
        console.log(this.users);
      },
      error => this.errorMessage = <any>error
    );
  }
}
