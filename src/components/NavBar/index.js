import React, {PureComponent} from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {NavLink, BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Lazy from "@loadable/component";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from "../../redux/actions/AuthUser";
const Home = Lazy(() => import('../Home'));
const SignIn = Lazy(() => import('../SignIn'));
const LeaderBoard = Lazy(() => import('../LeaderBoard'));
const AddQuestion = Lazy(() => import('../NewQuestion/index'));
const PollResult = Lazy(() => import('../Home/pollResults'));
const NotFound = Lazy(() => import('../NotFound'));

class NavBar extends PureComponent{
    render() {
        const {user, logout, history} = this.props;

        if(typeof user !== "object"){
            return (
                <Router>
                    <Route component={SignIn}/>
                    <Redirect to={{pathname:'/', state: {from: history}}}/>
                </Router>
            )
        }else {
            return (
                <Router>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink to="/" activeClassName="active">Home</NavLink>
                                <NavLink to="/leaderboard" activeClassName="active">LeaderBoard</NavLink>
                                <NavLink to="/add" activeClassName="active">New Question</NavLink>
                            </Nav>
                            <NavDropdown title={user.name || ''} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={()=> logout()}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                            <Route path="/" exact={true} component={Home}/>
                            <Route path="/add" exact={true} component={AddQuestion}/>
                            <Route path="/question/:question_id" exact={true} component={PollResult}/>
                            <Route path="/leaderboard" exact={true} component={LeaderBoard}/>
                            <Route path="/404" exact={true} component={NotFound}/>
                            <Redirect to="/404"/>
                    </Switch>
                </Router>
            )
        }

    }
}
const mapStateToProps = ({authUser}) => {
    return {
        user: authUser ? authUser : false
    }
};
export default connect(mapStateToProps, {logout})(NavBar)
NavBar.propTypes = {
    user: PropTypes.any,
    logout: PropTypes.func,
    history: PropTypes.string
};
