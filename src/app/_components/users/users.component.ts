import { Component, OnInit } from '@angular/core';
import { IUserList } from './users';
import { UserListService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UserListComponent implements OnInit {

  users: IUserList[] = [];  // this line initializes a users array variable of type IUserList
  errorMessage: any;

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.userListService.getUserList().subscribe(
      users => {
        console.log(users);  // called users, this is the json response api, should be a json object
        this.users = users;  // do something here
      },
      error => this.errorMessage = <any>error
    );
  }
}
