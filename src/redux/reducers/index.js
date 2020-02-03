import {combineReducers} from "redux";
import userReducer from './authUsers';
import questionsReducer from "./questions";
import { loadingBarReducer } from 'react-redux-loading-bar'
import users from "./users";
const root = combineReducers({
    authUser: userReducer,
    questions: questionsReducer,
    loadingBar: loadingBarReducer,
    users
});
export default root;