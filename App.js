import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Switch, Route } from 'react-router-dom';
import Icon from "react-native-vector-icons/FontAwesome";
import Quests from './src/screens/Quests/Quests';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';
import Profile from './src/screens/Profile';

export default class App extends React.Component{
  render() {
    return (
      // <Login/>
        <AppContainer />
    );
  }
}

// Temp Screens
class LandingScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        if(true) {
          <Route exact path="/login" component={Login} />
        } else {
          <Route exact path="/profile" component={Profile} />
        }
      </View>
    );
  }
}

class RegisterScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Route exact path="/register" component={Register} />
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Route exact path="/login" component={Login} />
      </View>
    );
  }
}

class QuestScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Route exact path="/quests" component={Quests} />
      </View>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Landing: {
      screen: LandingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" size={25} color={tintColor} />
        )
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={25} color={tintColor} />
        )
      }
    },
    Quest: {
      screen: QuestScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bars" size={25} color={tintColor} />
        )
      }
    },
  },
  {
    initialRouteName: 'Landing',
    tabBarOptions: {
      activeTintColor: '#3dbaeb'
    }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});