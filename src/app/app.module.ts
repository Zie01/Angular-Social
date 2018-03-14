import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

 var config = {
    apiKey: "AIzaSyBkraaRYzMUG_AsK9bwcdXz2Vs1oGVByvk",
    authDomain: "fir-social-77678.firebaseapp.com",
    databaseURL: "https://fir-social-77678.firebaseio.com",
    projectId: "fir-social-77678",
    storageBucket: "fir-social-77678.appspot.com",
    messagingSenderId: "824239301917"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
