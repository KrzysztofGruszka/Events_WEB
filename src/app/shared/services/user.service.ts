import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { this.getData(); }

  getData() {
    this.usersList = this.firebase.list('user');
    return this.usersList;
  }

}
