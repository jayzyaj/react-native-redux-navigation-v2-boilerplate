import {
    createStackNavigator,
    createDrawerNavigator
} from "react-navigation";


import Home from "../screens/home";
import Login from "../screens/login";

import DrawerComponent from "../components/drawer"

export const MainStack = createDrawerNavigator({
    Home: Home,
}, {
        contentComponent: DrawerComponent,
        contentOptions: {
            activeTintColor: 'green'
        }
    });

export const LoginStack = createStackNavigator({
    Login: {
        screen: Login
    }
});
