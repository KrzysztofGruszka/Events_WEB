import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userItem: Observable<any>;
  constructor(private authService: AuthService, private afDb: AngularFireDatabase) {
    this.userItem = afDb.object(`users/${this.authService.authInfo$.value.$uid}/profile`).valueChanges();
  }

  ngOnInit() {
  }

}
