import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  form: FormGroup;
  profilePath: AngularFireObject<any>;
  userItem: Observable<any>;

  constructor(private authService: AuthService,
    private afDb: AngularFireDatabase,
    private fb: FormBuilder,
    private router: Router) {

    this.userItem = afDb.object(`users/${this.authService.authInfo$.value.$uid}/profile`).valueChanges();

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onClickUpdate() {
    if (this.form.invalid) {
      console.log('Proszę wypełnić wszystkie informacje.');
      return;
    }

    const val = this.form.value;
    console.log(val.email);

    this.authService.signUp(val.email, val.password)
      .subscribe(
        () => {
          // insert Data to DB
          this.insertDB();
          alert('Konto użytkownika zostało utworzono pomyślnie!');
          this.router.navigateByUrl('/signin');
        },
        err => alert(err)
      );
  }

  insertDB() {
    this.profilePath = this.afDb.object(`users/${this.authService.authInfo$.value.$uid}/profile`);

    const val = this.form.value;
    this.profilePath.set({
      email: val.email,
      firstName: val.firstName,
      lastName: val.lastName,
    });
  }
}
