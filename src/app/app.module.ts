import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './email/email.component';

const firebaseConfig = {
    apiKey: 'AIzaSyAdl68nKQKkK-OmxlJs1sHJkXVfxhP9vIU',
    authDomain: 'authangular5-kyno.firebaseapp.com',
    databaseURL: 'https://authangular5-kyno.firebaseio.com',
    projectId: 'authangular5-kyno',
    storageBucket: 'authangular5-kyno.appspot.com',
    messagingSenderId: '192452764204'
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
