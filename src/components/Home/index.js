import React, {PureComponent} from "react";
import {Tab,Tabs} from "react-bootstrap";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import {connect} from 'react-redux'
import propTypes from 'prop-types';
 class Home extends PureComponent{

    render() {
        const {answeredQuestions, unansweredQuestions} = this.props;
        return(
            <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
                <Tab eventKey="unanswered" title="Unanswered Questions">
                    <Unanswered questions={unansweredQuestions}/>
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    <Answered questions={answeredQuestions}/>
                </Tab>
            </Tabs>

        )
    }
}

const mapStateToProps = ({ questions, authUser }) => {

    const answeredQuestions = Object.keys(authUser.answers).reduce((arr, key) => {
        return arr.concat([questions[key]]);
    }, []).sort((a,b) => b.timestamp - a.timestamp);

    return {
        unansweredQuestions : Object.keys(questions).filter(questionID => !answeredQuestions.includes(questions[questionID]))
            .reduce((arr, key) => {
                return arr.concat([questions[key]]);
            }, []).sort((a,b) => b.timestamp - a.timestamp),
        answeredQuestions
    }

};
export default connect(mapStateToProps)(Home);
Home.propTypes = {
    answeredQuestions: propTypes.array,
    unansweredQuestions: propTypes.array,
};
