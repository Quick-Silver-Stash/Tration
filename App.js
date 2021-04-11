import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import auth from '@react-native-firebase/auth';
import Quests from './src/screens/Quests/Quests';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';
import Profile from './src/screens/Profile/Profile';


function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = userState();

  // User State Change
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // Unsubscribe on Unmount
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return(
      <View>
        <Login/>
      </View>
    );
  };

  return (
    <View>
      <Text> Welcome {user.email} </Text>
    </View>
  )
}

// export default class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//       loading: true,
//     };
//     this.loginStatusCheck();
//   }

//   render() {
//     return (
//       // <Login/>
//         <AppContainer />
//     );
//   }
// }

// // Temp Screens
// class LandingScreen extends React.Component {
//   render() {
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text> Temporary Landing Screen </Text>
//       </View>
//     );
//   }
// }

// class RegisterScreen extends React.Component {
//   render() {
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Register/>
//       </View>
//     );
//   }
// }

// // class LoginScreen extends React.Component {
// //   render() {
// //     return(
// //       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
// //         <Login/>
// //       </View>
// //     );
// //   }
// // }

// class QuestScreen extends React.Component {
//   render() {
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Quests/>
//       </View>
//     );
//   }
// }

// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Landing: {
//       screen: LandingScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="home" size={25} color={tintColor} />
//         )
//       }
//     },
//     Register: {
//       screen: RegisterScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="search" size={25} color={tintColor} />
//         )
//       }
//     },
//     Login: {
//       screen: LoginScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="user" size={25} color={tintColor} />
//         )
//       }
//     },
//     Quest: {
//       screen: QuestScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="bars" size={25} color={tintColor} />
//         )
//       }
//     },
//   },
//   {
//     initialRouteName: 'Landing',
//     tabBarOptions: {
//       activeTintColor: '#3dbaeb'
//     }
//   }
// );

// const AppContainer = createAppContainer(bottomTabNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });