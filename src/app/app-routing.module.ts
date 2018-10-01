import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../app/shared/guard/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EventsComponent } from './components/events/events.component';
import { PeopleComponent } from './components/people/people.component';
import { EventComponent } from './components/event/event.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { MyeventComponent } from './components/myevent/myevent.component';
import { MyfriendsComponent } from './components/myfriends/myfriends.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddEventComponent } from './components/add-event/add-event.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'events', component: EventsComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'event/:id', component: EventComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'editUser', component: EdituserComponent },
  { path: 'myfriends', component: MyfriendsComponent},
  { path: 'myevents', component: MyeventComponent},
  { path: 'addevent', component: AddEventComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
