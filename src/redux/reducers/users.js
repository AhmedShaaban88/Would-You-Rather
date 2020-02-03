import {LOAD_ALL_USERS} from '../actions/Users'

export default function users (state= {}, action){
    switch(action.type){
        case LOAD_ALL_USERS:
            return {
                ...state,
                ...action.users
            };
        default:
            return state
    }
}