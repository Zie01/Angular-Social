import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';

//// Start FireStarter

// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module';

// Feature Modules
import { ItemModule } from './items/shared/item.module';
import { UploadModule } from './uploads/shared/upload.module';
import { UiModule } from './ui/shared/ui.module';
import { NotesModule } from './notes/notes.module';
///// End FireStarter

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';


 var config = {
    apiKey: "AIzaSyBkraaRYzMUG_AsK9bwcdXz2Vs1oGVByvk",
    authDomain: "fir-social-77678.firebaseapp.com",
    databaseURL: "https://fir-social-77678.firebaseio.com",
    projectId: "fir-social-77678",
    storageBucket: "fir-social-77678.appspot.com",
    messagingSenderId: "824239301917"
  };

let routes = [
  { path: "redirectTo:"login", pathMatch: "ful"},
  { path: "login", component: LoginCOmponent},
  { path: "register", component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ItemModule,
    UiModule,
    NotesModule,
    AngularFireModule.initializeApp(firebaseConfig)
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
   bootstrap: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
