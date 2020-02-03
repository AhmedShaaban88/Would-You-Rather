import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import configStore from "./redux/store";
import LoadingBar from "react-redux-loading-bar";
import App from './components/App';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <LoadingBar/>
        <App />
    </Provider>, document.getElementById('root'));

