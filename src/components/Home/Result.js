import React, {PureComponent} from "react";
import propTypes from 'prop-types';
import {connect} from 'react-redux';
class Result extends PureComponent {
    percentage = (currentOption) => (currentOption / this.props.totalVotes) * 100;
    choice = (currentOption) => currentOption.includes(this.props.user);
    render(){
        const {optionOne, optionTwo, totalVotes} = this.props;
        return(
            <React.Fragment>
            <div className="options">
                {this.choice(optionOne.votes) && <b className="text-warning">this is your choice</b>}
                <h5>{optionOne.text}</h5>
                <p className="font-weight-bold text-danger">{this.percentage(optionOne.votes.length)} %</p>
                <span><b>{optionOne.votes.length}</b> out of {totalVotes} votes</span>
            </div>
            <div className="options">
                {this.choice(optionTwo.votes) && <b className="text-warning">this is your choice</b>}
                <h5>{optionTwo.text}</h5>
                <p className="font-weight-bold text-danger">{this.percentage(optionTwo.votes.length)} %</p>
                <span><b>{optionTwo.votes.length}</b> out of {totalVotes} votes</span>
            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = ({authUser}) => ({user: authUser.id});
export default connect(mapStateToProps)(Result)
Result.propTypes = {
    optionOne: propTypes.shape([propTypes.array, propTypes.string]),
    optionTwo: propTypes.shape([propTypes.array, propTypes.string]),
    totalVotes: propTypes.number,
    user: propTypes.string
};