import React, { Component } from "react";
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import { DrawerItems, DrawerActions } from "react-navigation";
import CustomButton from '../components/button'
import CustomLoading from '../components/loading'

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

class DrawerComponent extends Component {
    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1
                }}>
                <View
                    style={{
                        height: 170,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image
                        source={{ uri: 'http://i.pravatar.cc/300' }}
                        style={{
                            marginTop: 30,
                            height: 120,
                            width: 120,
                            borderRadius: 60
                        }} />
                    <Text>{this.props.state.authSession.email || 'unknown@mail.com'}</Text>
                </View>
                <ScrollView>
                    <DrawerItems
                        {...this.props}
                        onItemPress={({ route, focused }) => {
                            if (focused) { // If pressed on the current active route just close the drawer
                                this.props.navigation.dispatch(DrawerActions.closeDrawer());
                            } else { // Otherwise navigate to the route or screen on press
                                this.props.navigation.navigate(route.routeName);
                            }
                        }}
                    />
                    <CustomButton
                        onPress={() => {
                            this.props.navigation.dispatch(DrawerActions.closeDrawer());
                            this.props.actions.logout()
                        }}
                        title={"LOG OUT"}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default connect(
    state => ({ state: state.authenticate }),
    dispatch => ({
        actions: bindActionCreators(authActions, dispatch)
    })
)(DrawerComponent);