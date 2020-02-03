import React, {PureComponent} from "react";
import LeaderCard from "./leader";
import {connect} from 'react-redux';
import propTypes from 'prop-types';
class LeaderBoard extends PureComponent{

    render() {
        const {users} = this.props;
        return(
            <LeaderCard users={users}/>
        )
    }
}
const mapStateToProps = ({authUser, users}) => {
  const exceptCurrent = {...users, [authUser.id]: {...authUser}};
    const userScoreRank = userData =>
        Object.keys(userData.answers).length + userData.questions.length;
    return {
        users: Object.values(exceptCurrent).sort((a, b) => userScoreRank(b) - userScoreRank(a))
    }
};
export default connect (mapStateToProps)(LeaderBoard)

LeaderBoard.propTypes = {
    users: propTypes.array
};