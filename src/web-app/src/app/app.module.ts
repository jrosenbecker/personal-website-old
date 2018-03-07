import 'materialize-css';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AboutComponent } from './main-content/about/about.component';
import { BlogComponent } from './main-content/blog/blog.component';
import { MainContentComponent } from './main-content/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './main-content/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
