import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material';

import { Event } from '../../shared/models/event.model';
import { EventService } from '../../shared/services/event.service';
import { Observable } from 'rxjs';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  id: String;
  updateForm: FormGroup;
  event: Event;
  // event: AngularFireObject<any>;

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private firebase: AngularFireDatabase, private af: AngularFireModule) {
      // this.event = this.firebase.object(`event/${this.id}`);
      this.eventService.getevent(this.id).valueChanges().subscribe(snap => {
        this.event = snap;
      });
    }

  ngOnInit() {
  }

  createForm() {
    this.updateForm = this.fb.group({
      EventName: '',
      EventLocation: '',
      EventDate: '',
      EventReq: '',
      EventDesc: '',
      PeopleNumber: ''
    });
  }
}
