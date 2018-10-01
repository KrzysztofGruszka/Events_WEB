import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Myfriends } from '../../shared/models/myfriends.model';
import { MyfriendsService } from '../../shared/services/myfriends.service';

@Component({
  selector: 'app-myfriends',
  templateUrl: './myfriends.component.html',
  styleUrls: ['./myfriends.component.css']
})
export class MyfriendsComponent implements OnInit {

  myfriendList: Myfriends[];
  userItem: Observable<any>;
  msg: string = null;

  constructor(private authService: AuthService, private afDb: AngularFireDatabase, private myfriendService: MyfriendsService) {
    this.userItem = afDb.object(`users/${this.authService.authInfo$.value.$uid}/profile`).valueChanges();
  }

  ngOnInit() {
    this.fetchData();
  }

  removeMyfriend(id) {
    this.myfriendService.deleteMyevent(id);
    console.log('Usunięto znajomego');
    this.msg = '!! Usunięto znajomego !!';
  }

  fetchData() {
    const x = this.myfriendService.getData();
    x.snapshotChanges().subscribe(item => {
      this.myfriendList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.myfriendList.push(y as Myfriends);
      });
    });
  }
}
