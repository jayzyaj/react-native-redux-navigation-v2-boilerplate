The project was bootstrapped with <a href="https://facebook.github.io/react-native/docs/getting-started" target="_blank">react-native init</a>

### Installation

1. Clone the project repository `https://github.com/jayzyaj/react-native-with-redux-react-navigation-v2-boilerplate`

2. Go inside to the project directory that you have cloned and open the terminal or command line and run `npm -i` or `yarn install` to install all the package needed

3. To link all the libraries and dependencies run `react-native link`

### Usage

If you are using android run the command below

```
react-native run-android
```

and if you are using iOS

```
react-native run-ios
```
When you run the app it will show you a **SplashScreen** and it will dispatch a action to restore a session. If a session exist in the storage it will dispatch another action to authenticate the user and redirect it to the **HomeScreen** or the DrawerNavigator which is the authenticated route or stack. Otherwise if a session session does not exist it will return the **LoginScreen** or the StackNavigator which is the Unauthenticated route or stack.

In order to navigate to the **HomeScreen** you need to be authenticated or to sign in. Use the credentials below to sign in:

**email:** `test123@nomail.com`

**password:** `123456`
