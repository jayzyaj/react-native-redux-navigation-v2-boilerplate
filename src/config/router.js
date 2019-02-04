import {
    createStackNavigator,
    createDrawerNavigator
} from "react-navigation";

import { COLOR } from './styles'

import Home from "../screens/home";
import Login from "../screens/login";

import DrawerComponent from "../components/drawer"

export const MainStack = createDrawerNavigator({
    Home: Home,
}, {
        initialRouteName: 'Home',
        contentComponent: DrawerComponent,
        contentOptions: {
            activeTintColor: COLOR.PANTOME
        }
});

export const LoginStack = createStackNavigator({
    Login: {
        screen: Login
    }
});
