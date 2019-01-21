import { Component, OnInit } from '@angular/core';
import { IUserList } from './user-list';
import { UserListService } from './user-list.service';
// import { KeysPipe } from './shared/keys.pipe';

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
        console.log(users);  // called users, this is the json response api, should be a json object
        this.users = users;  // do something here
      },
      error => this.errorMessage = <any>error
    );
  }
}
