import {applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import root from "../reducers";
import {createStore} from "redux";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export default function configStore (){
    return createStore(root, composeEnhancers(applyMiddleware(thunk)))
}