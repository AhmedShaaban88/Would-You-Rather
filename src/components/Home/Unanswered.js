import React, {PureComponent} from "react";
import Question from "./Question";
import propTypes from 'prop-types';
export default class Unanswered extends PureComponent {
    render(){
        const {questions} = this.props;
        if(questions){
            return(
                <React.Fragment>
                    {
                        questions && questions.map((question) => <Question question={question} key={question.id}/>)
                    }
                </React.Fragment>

            )
        } else {
          return (
              <h1>Loading ...</h1>
          )
        }


    }
}

Unanswered.propTypes = {
  questions: propTypes.array
};