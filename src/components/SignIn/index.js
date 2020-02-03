import React, {PureComponent} from "react";
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {login} from "../../redux/actions/AuthUser";
import {_getUsers} from "../../utils/_DATA";
import { showLoading } from 'react-redux-loading-bar'

class SingIn extends PureComponent{
    state = {
        user: 'sarahedo',
    };
    handleSubmit = (e) => {
        e.preventDefault();
        _getUsers().then(this.props.showLoading()).then(value => this.props.login(value[this.state.user]))
        this.props.history.push(this.props.location.state.from)
    };
    render(){
        return(
            <div className="content">


                <h4>Welcome Back!</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Easily SignIn</Form.Label>
                        <Form.Control as="select" onChange={(e) => this.setState({user:e.target.value})}>
                            <option value="sarahedo">Sarah Edo</option>
                            <option value="tylermcginnis">Tyler McGinnis</option>
                            <option value="johndoe">John Doe</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {login, showLoading})(SingIn);
SingIn.propTypes = {
    login: PropTypes.func,
    history: PropTypes.object
};