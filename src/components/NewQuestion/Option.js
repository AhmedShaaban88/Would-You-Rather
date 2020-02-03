import React from "react";
import {Form} from "react-bootstrap";
import propTypes from 'prop-types';

export default function Option(props) {
    const {label, placeholder, name, onValueChange} = props;
    return(
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" name={name} placeholder={placeholder} onChange={(e) => onValueChange(e.target.name, e.target.value)}/>
        </Form.Group>
    )
}

Option.propTypes = {
    label: propTypes.string,
    value: propTypes.string,
    name: propTypes.string,
    onValueChange: propTypes.func
};