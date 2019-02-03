import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { Card } from 'react-native-elements'
import CustomButton from "../components/button";
import CustomInput from "../components/input";
import CustomLoading from "../components/loading";
import Styles, { COLOR } from "../config/styles";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Sign in",
        headerTintColor: COLOR.LIGHT,
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: COLOR.PANTOME
        }
    }); // navigationOptions

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    renderError(error) {
        if (error) {
            return (
                <View
                    style={{
                        height: 40,
                        padding: 8,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        backgroundColor: COLOR.DANGER
                    }}
                >
                    <Text style={{ color: '#ffffff' }}>{error}</Text>
                </View>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <StatusBar
                    backgroundColor={COLOR.DARK}
                    barStyle="light-content"
                />
                <Card>
                    {this.renderError(this.props.state.authError)}

                    <View style={{ height: 8 }} />

                    <CustomInput
                        icon="envelope"
                        value={this.state.email}
                        placeholder="Email"
                        onChangeText={v => this.setState({ email: v })}
                    />
                    <View style={{ height: 8 }} />
                    <CustomInput
                        icon="lock"
                        value={this.state.password}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={v => this.setState({ password: v })}
                    />
                    <View style={{ height: 16 }} />
                    <CustomButton
                        onPress={() =>
                            this.props.actions.login(this.state.email, this.state.password)
                        }
                        title={"SIGN IN"}
                    />
                </Card>
                <View>
                    <CustomLoading loading={this.props.state.requestingAuth} />
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({ state: state.authenticate }),
    dispatch => ({
        actions: bindActionCreators(authActions, dispatch)
    })
)(Login);
