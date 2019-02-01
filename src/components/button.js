/* @flow */

import React, { Component } from "react";
import {
    Platform,
    TouchableOpacity,
    Text,
    TouchableNativeFeedback,
    View
} from "react-native";
import Proptypes from "prop-types";

import { COLOR } from "../config/styles";

class CustomButton extends Component {
    render() {
        if (Platform.OS === "android") {
            return (
                <TouchableNativeFeedback onPress={() => this.props.onPress()}>
                    <View
                        style={{
                            backgroundColor: COLOR.PANTOME,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            style={{
                                color: COLOR.LIGHT,
                                fontWeight: "bold",
                                fontSize: 16
                            }}
                        >
                            {this.props.title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            );
        } else {
            return (
                <TouchableOpacity
                    style={{
                        backgroundColor: COLOR.PANTOME,
                        alignSelf: "stretch",
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={() => this.props.onPress()}
                >
                    <Text
                        style={{
                            color: COLOR.LIGHT,
                            fontWeight: "bold",
                            fontSize: 16
                        }}
                    >
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            );
        }
    }
}

CustomButton.propTypes = {
    title: Proptypes.string.isRequired,
    onPress: Proptypes.func.isRequired
};

export default CustomButton;
