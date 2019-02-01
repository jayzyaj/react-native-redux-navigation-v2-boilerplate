/* @flow */

import React, { Component } from "react";
import { MainStack, LoginStack } from "../config/router";
import Splash from "./splash";
import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

class Root extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.actions.restoreSession();
        }, 2000);
    }

    render() {
        if (this.props.state.requestingRestore) {
            return <Splash />;
        }

        if (this.props.state.isAuth) {
            return <MainStack />;
        } else {
            return <LoginStack />;
        }
    }
}

export default connect(
    state => ({ state: state.authenticate }),
    dispatch => ({
        actions: bindActionCreators(authActions, dispatch)
    })
)(Root);
