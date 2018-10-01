import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { Myfriends } from '../../shared/models/myfriends.model';
import { MyfriendsService } from '../../shared/services/myfriends.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  usersList: User[];
  router: any;
  myfriend: Myfriends;
  userItem: Observable<any>;
  myfriendsService: any;
  msg: String = null;
  UserMainString: String;

  constructor(private usersService: UserService, private afDb: AngularFireDatabase,
    private authService: AuthService, private myfriendService: MyfriendsService) {
    this.userItem = afDb.object(`user/${this.authService.authInfo$.value.$uid}`).valueChanges();
  }

  ngOnInit() {
    const x = this.usersService.getData();
    x.snapshotChanges().subscribe(item => {
      this.usersList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.usersList.push(y as User);
      });
    });
  }

  addFriend(key, UserMain, UserFriend, UserFName, UserFLName, UserFEmail) {
    this.userItem.subscribe();
    if (this.UserMainString === UserFriend) {
      this.msg = '!! Nie dodawaj samego siebie !!';
    } else {
      const myfriend = {
        $key: key,
        UserMain: UserMain,
        UserFriend: UserFriend,
        UserFName: UserFName,
        UserFLName: UserFLName,
        UserFEmail: UserFEmail
      };
      this.myfriendService.insertmyfriend(myfriend);
      const mefriend = {
        $key: key,
        UserMain: UserFriend,
        UserFriend: 'krzysieko2',
        UserFName: 'Krysztof',
        UserFLName: 'Gruszka',
        UserFEmail: 'krzysiek16333@o2.pl'
      };
      this.myfriendService.insertmyfriend(mefriend);
      console.log('Dodano do listy znajomych');
      this.msg = '!! Dodano do listy znajomych !!';
    }
  }

}
