import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventList: AngularFireList<any>;
  event: AngularFireObject<Event>;
  selectedEvent: Event = new Event();

  constructor(private firebase: AngularFireDatabase) { this.getData(); }

  getData() {
    this.eventList = this.firebase.list('event');
    return this.eventList;
  }

  getevent(eventid: String): AngularFireObject<Event> {
    return this.event = this.firebase.object('/event/' + eventid);
  }

  insertevent(event: Event) {
    this.eventList.push({
      EventName: event.EventName,
      EventLocation: event.EventLocation,
      EventDate: event.EventDate,
      EventDesc: event.EventDesc,
      EventReq: event.EventReq
    });
  }

  deleteEvent($key: string) {
    this.eventList.remove($key);
  }
}
