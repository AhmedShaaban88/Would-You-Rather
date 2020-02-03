import React, {PureComponent} from "react";
import {Form, Button} from "react-bootstrap";
import {connect} from 'react-redux';
import {userNewQuestion} from "../../redux/actions/Questions";
import propTypes from 'prop-types';
import Option from "./Option";

class NewQuestion extends PureComponent{
    state = {
        optionOne: '',
        optionTwo: ''
    };
    handleChange = (key, option) => this.setState({
        [key]: option
    });
    saveQuestion = () => {
        this.props.saveQuestion(this.state.optionOne, this.state.optionTwo);
        this.props.history.push('/');
    };
    render() {
        return(
        <div className="content">
            <h4>Would you rather</h4>
            <Form>
                <Option label="Option 1" placeholder="Enter option 1" name="optionOne" onValueChange={this.handleChange}/>
                <Option label="Option 2" placeholder="Enter option 2" name="optionTwo" onValueChange={this.handleChange}/>
                <Button variant="primary" type="button" onClick={() => this.saveQuestion()}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}
const mapDispatchToProps  = (dispatch) => {
    return {
        saveQuestion: (optionOne, optionTwo) => {
            if(optionOne.trim() && optionTwo.trim()){
                dispatch(userNewQuestion(optionOne, optionTwo))
            }
        }
    }
};
export default connect (null, mapDispatchToProps)(NewQuestion)
NewQuestion.propTypes = {
    saveQuestion: propTypes.func,
    history: propTypes.object
};