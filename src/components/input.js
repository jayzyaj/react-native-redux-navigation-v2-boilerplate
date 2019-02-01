/* @flow */

import React, { Component } from "react";
import Proptypes from "prop-types";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { COLOR } from "../config/styles";

class CustomInput extends Component {
    render() {
        return (
            <View
                style={{
                    backgroundColor: COLOR.LIGHT_GRAY,
                    alignItems: "center",
                    height: 40,
                    flexDirection: "row"
                }}
            >
                <View
                    style={{
                        height: 32,
                        width: 32,
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 8,
                        borderWidth: 1,
                        borderRadius: 16,
                        borderColor: COLOR.PANTOME
                    }}
                >
                    <Icon name={this.props.icon} size={24} color={COLOR.PANTOME} />
                </View>
                <TextInput
                    style={{
                        color: COLOR.BLACK,
                        height: 40,
                        marginHorizontal: 8,
                        flex: 1
                    }}
                    placeholderTextColor={COLOR.GRAY}
                    value={this.props.value}
                    placeholder={this.props.placeholder || ""}
                    secureTextEntry={this.props.secureTextEntry}
                    underlineColorAndroid="transparent"
                    onChangeText={v => this.props.onChangeText(v)}
                />
            </View>
        );
    }
}

CustomInput.propTypes = {
    icon: Proptypes.string.isRequired,
    placeholder: Proptypes.string,
    value: Proptypes.string.isRequired,
    onChangeText: Proptypes.func.isRequired
};

export default CustomInput;
