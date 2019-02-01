import React from "react";
import { View, Text, StatusBar } from "react-native";
import Styles, { COLOR } from "../config/styles";

const Splash = () => (
    <View
        style={[
            Styles.container,
            { justifyContent: "center", alignItems: "center" }
        ]}
    >
        <StatusBar backgroundColor={COLOR.STATUS_BAR} barStyle="light-content" />
        <Text style={{ color: COLOR.TEXT, fontSize: 36, fontWeight: "bold" }}>
            React Native Redux with React Navigation v2 boiler plate
    </Text>
    </View>
);

export default Splash;
