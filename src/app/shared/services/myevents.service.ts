import { Injectable } from '@angular/core';
import { Myevents } from '../models/myevents.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MyeventsService {

  myeventList: AngularFireList<any>;
  myevent: AngularFireObject<Myevents>;
  selectedEvent: Myevents = new Myevents();

  constructor(private firebase2: AngularFireDatabase) { this.getData(); }

  getData() {
    this.myeventList = this.firebase2.list('myevents');
    return this.myeventList;
  }

  getDatabyUsername(username) {

  }

  insertmyevent(myevent: Myevents) {
    this.myeventList.push({
      Username: myevent.Username,
      EventName: myevent.EventName,
      EventLocation: myevent.EventLocation,
      EventDate: myevent.EventDate,
      EventDesc: myevent.EventDesc,
      EventReq: myevent.EventReq
    });
  }

  deleteMyevent($key: string) {
    this.myeventList.remove($key);
  }

}
