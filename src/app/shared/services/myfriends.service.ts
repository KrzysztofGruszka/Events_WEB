import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Myfriends } from '../models/myfriends.model';

@Injectable({
  providedIn: 'root'
})
export class MyfriendsService {

  myfriendList: AngularFireList<any>;
  myfriend: AngularFireObject<Myfriends>;
  selectedFriend: Myfriends = new Myfriends();

  constructor(private firebase2: AngularFireDatabase) { this.getData(); }

  getData() {
    this.myfriendList = this.firebase2.list('myfriends');
    return this.myfriendList;
  }

  getDatabyUsername(username) {

  }

  insertmyfriend(myfriend: Myfriends) {
    this.myfriendList.push({
      UserMain: myfriend.UserMain,
      UserFriend: myfriend.UserFriend,
      UserFName: myfriend.UserFName,
      UserFLName: myfriend.UserFLName,
      UserFEmail: myfriend.UserFEmail
    });
  }

  deleteMyevent($key: string) {
    this.myfriendList.remove($key);
  }
}
