import React, {PureComponent} from "react";
import Card from "react-bootstrap/Card";
import propTypes from 'prop-types';
import UserInfo from "../UserInfo";
import {Button, Form} from "react-bootstrap";
import Option from "./Options";
import Result from "./Result";
import {connect} from 'react-redux';
import {userAnswer} from "../../redux/actions/Questions";
import {Redirect} from 'react-router-dom';

class PollResult extends PureComponent {
    state = {
        optionChoosed: ''
    };
    handleChange = (value) => this.setState({
        optionChoosed: value
    });

    saveOption = () => {
        this.props.saveQuestionAnswer(this.state.optionChoosed);
    };
    render(){
        const {question, answered, notFound} = this.props;
            if(!notFound){
               return   <Card className="text-center">
                   <Card.Body>
                       <UserInfo person={question.author}/>
                       <h6>Would you rather</h6>
                       {answered &&
                       <div>
                           <h6>Results: </h6>
                           <div>
                               <Result optionOne={question.optionOne} optionTwo={question.optionTwo} totalVotes={question.optionOne.votes.length + question.optionTwo.votes.length}/>
                           </div>
                       </div>
                       }
                       {!answered && <div>
                           <Form>
                               <Form.Group  controlId="exampleForm.ControlInput1">
                                   <Option label={question.optionOne.text} value="optionOne" onValueChange={this.handleChange}/>
                                   <Option label={question.optionTwo.text} value="optionTwo" onValueChange={this.handleChange}/>
                                   <Button variant="info" type="button" size={"sm"} onClick={() => this.saveOption()}>
                                       Submit
                                   </Button>
                               </Form.Group>


                           </Form>
                       </div>}


                   </Card.Body>
               </Card>
            } else {
                return <Redirect to="/404"/>
            }

    }
}
const mapStateToProps = ({questions, authUser}, {match}) => {
    const userAnswers = authUser.answers;
    let answered;
    const { question_id } = match.params;
    const question = questions[question_id];
    if(!question){
        return {notFound: true}
    }
    else if (userAnswers.hasOwnProperty(question.id)) {
        answered = userAnswers[question.id]
    }
    return {
        question,
        answered,
        user: authUser.id,
        notFound: false
    }
};
const mapDispatchToProps = (dispatch, props) => {
    const { question_id } = props.match.params;

    return {
        saveQuestionAnswer: (answer) => {
            if(answer){
                dispatch(userAnswer(question_id, answer))
            }
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(PollResult)
PollResult.propTypes = {
    question: propTypes.object,
    answered: propTypes.string,
    notFound: propTypes.bool
};
