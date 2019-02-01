/* @flow */

import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView, Button } from "react-native";

import CustomButton from "../components/button";
import CustomLoading from "../components/loading";

import Styles, { COLOR } from "../config/styles";

import Icon from "react-native-vector-icons/FontAwesome";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerTintColor: COLOR.HEADER_TINT,
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: COLOR.HEADER_BACKGROUND
        }
    }); // navigationOptions

    render() {
        return (
            <View style={[Styles.container, { padding: 0, paddingHorizontal: 16 }]}>
                <StatusBar
                    backgroundColor={COLOR.STATUS_BAR}
                    barStyle="light-content"
                />

                <View
                    style={{
                        // flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 64
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#ffffff10",
                            borderRadius: 96,
                            width: 192,
                            height: 192,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Icon name="home" size={128} color={COLOR.BACKGROUND} />
                    </View>
                    <Text
                        style={{
                            color: COLOR.CONTENT_TEXT,
                            margin: 8,
                            fontSize: 20,
                            marginTop: 16
                        }}
                    >
                        {`Welcome, ${this.props.state.authSession.username ||
                            "Guest"}!`}
                    </Text>
                </View>
                <View
                    style={{
                        position: "absolute",
                        bottom: 32,
                        left: 16,
                        right: 16,
                        height: 40
                    }}
                >
                    <CustomButton onPress={this.props.actions.logout} title={"SIGN OUT"} />
                </View>
                <CustomLoading text={"Signing you out..."} loading={this.props.state.clearingAuth} />
            </View>
        );
    }
}

export default connect(
    state => ({ state: state.authenticate }),
    dispatch => ({
        actions: bindActionCreators(authActions, dispatch)
    })
)(Home);
