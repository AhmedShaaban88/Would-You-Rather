import React from 'react';
import NavBar from "./NavBar";
import {loadAllQuestions_users} from "../redux/actions/Questions";
import {connect} from 'react-redux';
import {createBrowserHistory} from 'history';

class App extends React.PureComponent{
    componentDidMount() {
        this.props.loadAllQuestions_users();
    }
    render() {
        const history= createBrowserHistory();
        return (
            <NavBar history={history.location.pathname}/>
        );
    }


}

export default connect(null,  {loadAllQuestions_users})(App);
