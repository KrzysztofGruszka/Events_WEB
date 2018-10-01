// angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/event/event.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PeopleComponent } from './components/people/people.component';
import { MyfriendsComponent } from './components/myfriends/myfriends.component';
import { MyeventComponent } from './components/myevent/myevent.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { AddEventComponent } from './components/add-event/add-event.component';

// firebase
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Shared
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthService } from './shared/services/auth.service';

// Material
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, MatSnackBarModule,
  MatTableModule, MatTabsModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    EventsComponent,
    EventComponent,
    ProfileComponent,
    PeopleComponent,
    MyfriendsComponent,
    MyeventComponent,
    EdituserComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
