import { Component, OnInit } from '@angular/core';

import { EventService } from '../../shared/services/event.service';
import { MyeventsService } from '../../shared/services/myevents.service';
import { AuthService } from '../../shared/services/auth.service';
import { Event } from '../../shared/models/event.model';
import { Myevents } from '../../shared/models/myevents.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventList: Event[];
  router: any;
  myevent: Myevents;
  userItem: AngularFireObject<any>;
  msg: string = null;

  constructor(private eventService: EventService, private myeventsService: MyeventsService,
    private afDb: AngularFireDatabase, private authService: AuthService) {
    this.userItem = afDb.object(`user/${this.authService.authInfo$.value.$uid}`);
  }

  ngOnInit() {
    const x = this.eventService.getData();
    x.snapshotChanges().subscribe(item => {
      this.eventList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.eventList.push(y as Event);
      });
    });
  }

  eventDetail(key) {
    this.router.navigation([`/event/${key}`]);
  }

  addEventToUser(key, UserName, EventName, EventLocation, EventDate, EventDesc, EventReq) {
    const myevent = {
      $key: key,
      Username: UserName,
      EventName: EventName,
      EventLocation: EventLocation,
      EventDate: EventDate,
      EventDesc: EventDesc,
      EventReq: EventReq
    };
    this.myeventsService.insertmyevent(myevent);
    console.log('Dodano do listy wydarzeń');
    this.msg = '!! Wzięto udział w wydarzeniu !!';
  }
}
