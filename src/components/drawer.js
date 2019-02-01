import React, { Component } from "react";
import { SafeAreaView, ScrollView, View, Image, Button } from 'react-native';
import { DrawerItems } from "react-navigation";

const DrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: 'http://i.pravatar.cc/300' }}
                style={{ height: 120, width: 120, borderRadius: 60 }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
            <Button title="LOG OUT" onPress={() => this.props.onPress()} />
        </ScrollView>
    </SafeAreaView>
)

export default DrawerComponent