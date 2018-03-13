import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer}),FormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
