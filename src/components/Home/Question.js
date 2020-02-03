import React, {PureComponent} from "react";
import Card from "react-bootstrap/Card";
import UserInfo from "../UserInfo";
import {Button} from "react-bootstrap";
import propTypes from 'prop-types';
import {Link} from "react-router-dom";

export default class Question extends PureComponent {
    render(){
        const {question} = this.props;
        return(
            <Card className="text-center">
                <Card.Body>
                    <UserInfo person={question?.author}/>
                    <h6>Would you rather</h6>
                        <Link to={"/question/" + question.id} className="text-white">
                            <Button variant="info" type="button" size={"sm"} >
                            View Poll
                            </Button>
                        </Link>
                </Card.Body>
            </Card>
        )
    }
}
Question.propTypes = {
    question: propTypes.object,
};