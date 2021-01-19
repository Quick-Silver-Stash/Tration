import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quests from './src/screens/Quests/Quests';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {
        /*
        Put our designs here for now while we don't have a nav bar
        <Quests />
        */
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Login Screen Test
// import { StatusBar } from "expo-status-bar";
// import React, { useState, Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   Image,
//   Button,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function App() {
//         const [email, setEmail] = useState("");
//         const [password, setPassword] = useState("");

//         return (
//           <View style={styles.container}>
//             <Image
//               style={styles.image}
//               source={require("./assets/placeholder-logo-1.png")}
//             />
//             <StatusBar style='auto'/>
//             <View style={styles.inputView}>
//               <TextInput
//                 style={styles.TextInput}
//                 placeholder="Enter Email"
//                 placeholderTextColor="#003f5c"
//                 keyboardType="email-address"
//                 secureTextEntry={false}
//                 autoCapitalize={false}
//                 autoCorrect={false}
//                 onChangeText={(email) => setEmail(email)}
//                 value={email}
//               />
//             </View>
//             <View style={styles.inputView}>
//               <TextInput
//                 style={styles.TextInput}
//                 placeholder="Enter Password"
//                 placeholderTextColor="#003f5c"
//                 secureTextEntry={true}
//                 autoCapitalize={false}
//                 autoCorrect={false}
//                 onChangeText={(password) => setPassword(password)}
//               />
//             </View>
//             <TouchableOpacity>
//               <Text style={styles.forgot_button}>Forgot Password?</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Text style={styles.register_button}>Don't have an account yet?</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.loginButton}>
//               <Text style={styles.loginText}>LOGIN</Text>
//             </TouchableOpacity>
//           </View>
//         );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     width: 200,
//     height: 150,
//     marginBottom: 30,
//   },
//   inputView: {
//     backgroundColor: "#1A8BFF",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 0,
//   },
//   register_button: {
//     height: 30,
//     marginBottom: 5,
//   },
//   loginButton: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#0068D2",
//   },
// });
