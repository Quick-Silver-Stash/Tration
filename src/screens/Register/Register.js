import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import firebase from "firebase/app";
import "firebase/functions";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  View,
} from "react-native";

function registerUser(firstName, lastName, email, password) {
  let registerFn = firebase.functions().httpsCallable('register');
  registerFn({ firstName: firstName, lastName: lastName, email: email, password: password})
    .then((result) => {
      console.log("Successfully registered user");
      console.log(result);
    })
    .catch((result) => {
      console.log("Registration failed");
      let code = error.code;
      let message = error.message;
      let details = error.details;
      console.log(code);
      console.log(message);
      console.log(details);
    })
}

export default function Register() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
      
        return (
          <View style={styles.container}>
            <StatusBar style='auto'/>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter First Name"
                placeholderTextColor="#003f5c"
                secureTextEntry={false}
                autoCorrect={false}
                onChangeText={(firstName) => setFirstName(firstName)}
                value={firstName}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Last Name"
                placeholderTextColor="#003f5c"
                secureTextEntry={false}
                autoCorrect={false}
                onChangeText={(lastName) => setLastName(lastName)}
                value={lastName}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Email"
                placeholderTextColor="#003f5c"
                keyboardType="email-address"
                secureTextEntry={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={(email) => setEmail(email)}
                value={email}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={(password) => setPassword(password)}
                value={password}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.register_button}>Already have an account? Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={registerUser}>
              <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 30,
  },
  inputView: {
    backgroundColor: "#1A8BFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 0,
  },
  register_button: {
    height: 30,
    marginBottom: 5,
  },
  loginButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#0068D2",
  },
});
