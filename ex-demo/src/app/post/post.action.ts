import { Action } from '@ngrx/store';

//export constants representing each actions
export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class editText implements Action{
    readonly type = EDIT_TEXT;

    //to send data with the action we need to define a constructor having payload property
    constructor(public payload: string){
    
    }
}

export class upvote implements Action{
    readonly type = UPVOTE;
}

export class downvote implements Action{
    readonly type = DOWNVOTE;
}

export class reset implements Action{
    readonly type = RESET;
}

export type All
    = upvote |
      downvote|
      reset|
      editText;