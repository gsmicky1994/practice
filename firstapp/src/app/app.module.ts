import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './components/navbar.component';
import { Breadcrumb } from './components/breadcrumb/breadcrumb.component'
import { HomeComponent } from './components/home/home.component'
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,NavbarComponent,Breadcrumb,HomeComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
