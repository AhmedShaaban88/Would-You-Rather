import React, {PureComponent} from "react";
import UserInfo from "../UserInfo";
import Card from "react-bootstrap/Card";
import propTypes from 'prop-types';
export default class LeaderCard extends PureComponent{
    render() {
        const {users} = this.props;
        return(
        <Card className="text-center">
            <Card.Body>
                {users && users.map((user, index)=> (
                    <React.Fragment key={user.id}>
                    <h1 className="text-danger">#{index + 1}</h1>
                    <UserInfo person={user.id}/>
                    <h6>Answered Questions: <span>{Object.keys(user.answers).length}</span></h6>
                    <h6>Created Questions: <span>{user.questions.length}</span></h6>
                    <h3 className="text-danger">Score: <span>{Object.keys(user.answers).length + user.questions.length}</span></h3>
                    <hr/>
                    </React.Fragment>
                ))}

            </Card.Body>
        </Card>
        )
    }
}

LeaderCard.propTypes = {
    users: propTypes.array
};