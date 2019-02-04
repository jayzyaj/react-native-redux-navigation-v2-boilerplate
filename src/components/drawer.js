import React, { Component } from "react";
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { DrawerItems } from "react-navigation";
import CustomButton from '../components/button'

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
                        height: 150,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image
                        source={{ uri: 'http://i.pravatar.cc/300' }}
                        style={{
                            height: 120,
                            width: 120,
                            borderRadius: 60
                        }} />
                </View>
                <ScrollView>
                    <DrawerItems {...this.props} />
                    <CustomButton
                        onPress={this.props.actions.logout}
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