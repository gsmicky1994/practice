import * as PostAction from '../post/post.action'
import { Post } from '../post/post'
import { Action } from '@ngrx/store'
import { All } from '../post/post.action'

export type Action = PostAction.All;
export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

const defaultState: Post = {
    text: 'This is default post',
    likes: 0
}

//helper functions to create newe state object
const newState = (state,newData) => {
    return Object.assign({},state,newData)
}
export function postReducer(state: Post =  defaultState,action: CustomAction){
    console.log(state,action.type)
    switch(action.type){
        case PostAction.EDIT_TEXT:
        return newState(state,{text: action.payload});

        case PostAction.UPVOTE:
        return newState(state,{likes: state.likes + 1});

        case PostAction.DOWNVOTE:
        return newState(state,{likes: state.likes - 1});

        case PostAction.RESET:
        return defaultState;

        default: 
        return state;

    }
}