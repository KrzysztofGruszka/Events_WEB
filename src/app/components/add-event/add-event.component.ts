import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers: [EventService]
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getData();
  }

  onSubmit(eventForm: NgForm) {
    this.eventService.insertevent(eventForm.value);
    this.resetForm(eventForm);
  }

  resetForm(eventForm?: NgForm) {
    if (eventForm != null) { eventForm.reset(); }
    this.eventService.selectedEvent = {
      $key: null,
      EventName: '',
      EventLocation: '',
      EventDate: '',
      EventDesc: '',
      EventReq: ''
    };
  }
}
