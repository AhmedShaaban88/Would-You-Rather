import React, {PureComponent} from "react";
import {Form} from "react-bootstrap";
import propTypes from 'prop-types';

export default class Option extends PureComponent {
    render(){
        const {label, value, onValueChange} = this.props;
        return(
            <Form.Check
                className="mb-3"
                type="radio"
                id={label}
                label={label}
                value={value}
                name="options"
                onChange={(e) => onValueChange(e.target.value)}
            />
        )
    }
}

Option.propTypes = {
    label: propTypes.string,
    value: propTypes.string,
    onValueChange: propTypes.func
};