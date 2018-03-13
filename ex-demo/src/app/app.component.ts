import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as PostAction from './post/post.action';
import { Post } from './post/post';
interface AppState {
   message: string;
   post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message$ :Observable<string>;

  post: Observable<Post>;

  text: string;

  constructor(private store: Store<AppState>){
    this.message$ = this.store.select('message');
    this.post = this.store.select('post');

  }

  editText(){
    this.store.dispatch(new PostAction.editText(this.text))
  }

  resetPost(){
    this.store.dispatch(new PostAction.reset())
  }
  
  upvote(){
    this.store.dispatch(new PostAction.upvote())
  }

  downvote(){
    this.store.dispatch(new PostAction.downvote())
  }

  Message1(){
      this.store.dispatch({type: 'Msg1'})
  }

  Message2(){
      this.store.dispatch({type: 'Msg2'})
  }
}
