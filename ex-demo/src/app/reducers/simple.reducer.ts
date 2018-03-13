import { Action } from '@ngrx/store'

export function simpleReducer(state: string = 'Hello World',action: Action) {
    console.log(action.type,state)
//take the current state and copy it over to new state based on whatever change the action 
//is trying to perform. handle this with switch
    switch(action.type){
        case 'Msg1':
          return state = 'This is Message 1'
        case 'Msg2':
          return state = 'This is Message 2'
        default:
            return state
    }

} 