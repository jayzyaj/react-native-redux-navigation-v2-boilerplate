import React, { Component } from "react";
import { Header, Left, Right, Icon as NativeIcon, Button, Body, Title } from 'native-base';
import { View } from "react-native";
import { COLOR } from "../config/styles";

const DrawerHeader = props => {
    return (
        <Header transparent androidStatusBarColor={COLOR.DARK} style={{ backgroundColor: COLOR.PANTOME }}>
            <Left>
                <Button transparent onPress={() => props.onPress()}>
                    <NativeIcon name={props.icon} />
                </Button>
            </Left>
            <Body>
            </Body>
        </Header>
    )
}

export default DrawerHeader