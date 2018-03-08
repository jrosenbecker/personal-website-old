import 'materialize-css';
import * as auth0 from 'auth0-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterializeModule } from 'angular2-materialize';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AboutComponent } from './main-content/about/about.component';
import { BlogComponent } from './main-content/blog/blog.component';
import { MainContentComponent } from './main-content/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { SocialIconComponent } from './footer/social-icon/socialicon.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './login/callback.component';
import { EditComponent } from './main-content/edit/edit.component';
import { LogoutComponent } from './login/logout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    SocialIconComponent,
    LoginComponent,
    LogoutComponent,
    CallbackComponent,
    EditComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        skipWhenExpired: true
      }
    })
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
