import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() nameUser;

  user: string = '';
  lastUser: string = '';
  users: string[] = ['ryan', 'joe', 'cameron'];

  constructor() { }

  sayHello(user){
    alert('Hello ' + user);
  }

  addUser(newUser) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
  
  deleteUser(user) {
    for(let i = 0; i < this.users.length; i++) {
      if( user == this.users[i] ){
        this.users.splice(i, 1);
      }
    }
  }

  chargeInput(user){
    this.user = user;
    this.lastUser = user;
  }

  updateUser(modUser) {
    if (modUser.value) {
      console.log(this.lastUser);
      this.deleteUser(this.lastUser);
      this.addUser(modUser);
      return false;
    }
  }


  ngOnInit(): void {
  }

}
