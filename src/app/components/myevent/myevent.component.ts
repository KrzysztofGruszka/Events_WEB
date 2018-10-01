import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Myevents } from '../../shared/models/myevents.model';
import { MyeventsService } from '../../shared/services/myevents.service';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css']
})
export class MyeventComponent implements OnInit {

  myeventList: Myevents[];
  router: any;

  userItem: Observable<any>;
  msg: string = null;

  constructor(private authService: AuthService, private afDb: AngularFireDatabase, private myeventService: MyeventsService) {
    this.userItem = afDb.object(`users/${this.authService.authInfo$.value.$uid}/profile`).valueChanges();
  }

  ngOnInit() {
    this.fetchData();
  }

  removeMyevent(id) {
    this.myeventService.deleteMyevent(id);
    console.log('Opuszczono wydarzenie');
    this.msg = '!! Opuszczono wydarzenie !!';
  }

  fetchData() {
    const x = this.myeventService.getData();
    x.snapshotChanges().subscribe(item => {
      this.myeventList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.myeventList.push(y as Myevents);
      });
    });
  }

}
