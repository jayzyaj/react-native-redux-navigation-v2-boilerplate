import React, { Component } from "react";
import { Header, Left, Icon as NativeIcon, Button, Body, Title, Right } from 'native-base';
import { View } from "react-native";
import { COLOR } from "../config/styles";

const DrawerHeader = props => {
    return (
        <View>
            <Header transparent androidStatusBarColor={COLOR.DARK} style={{ backgroundColor: COLOR.PANTOME }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={() => props.onPress()}>
                        <NativeIcon name={props.icon} />
                    </Button>
                </Left>
                <Body style={{ flex: 1, alignItems: 'center' }}>
                    <Title>{props.headerTitle}</Title>
                </Body>
                <Right style={{ flex: 1 }}>
                </Right>
            </Header>
        </View>
    )
}

export default DrawerHeader