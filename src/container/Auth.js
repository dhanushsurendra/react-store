import React from 'react';
import './Auth.css';

import { connect } from 'react-redux';

import Card from '../UI/Card';

const Auth = props => {

    return (
        <Card>
            <h2>Your are not authenticated</h2>
            <button className="button" onClick={() => props.onAuth()}>Login</button>
        </Card>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: () => dispatch({type: 'AUTH'})
    }
}

export default connect(null, mapDispatchToProps)(Auth);