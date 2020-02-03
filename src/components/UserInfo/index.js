import React, {PureComponent} from "react";
import {Figure} from "react-bootstrap";
import propTypes from "prop-types";
import {connect} from 'react-redux';

class UserInfo extends PureComponent{
    render(){
        const {name, avatarURL} = this.props;
        return(
            <div>
                <Figure>
                    <Figure.Image
                        width={50}
                        height={50}
                        src={avatarURL}
                    />
                    <Figure.Caption>
                        {name}
                    </Figure.Caption>
                </Figure>

            </div>
        )
    }
}
const mapStateToProps = ({users}, {person}) => {
    return users[person];
};
export default connect (mapStateToProps)(UserInfo)

UserInfo.propTypes = {
    person: propTypes.string,
    name: propTypes.string,
    avatarURL: propTypes.string
};