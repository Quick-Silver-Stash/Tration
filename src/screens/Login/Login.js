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

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            session: ''
        }
    }
    
    loginUser(email, password) {
        let loginFn = firebase.functions().httpsCallable('login');
        loginFn({email: this.state.email, password: this.state.password})
          .then((result) => {
            console.log("Successfully Logged In");
            console.log(result);
            this.state.session = result.user.tenantId
          })
          .catch((error) => {
            console.log("Login Failed")
            let code = error.code;
            let message = error.message;
            let details = error.details;
            console.log(code);
            console.log(message);
            console.log(details);
          })
      
      }

    render() {
        
          
          function Login() {          
              return (
                  <View style={styles.container}>
                      <StatusBar style="auto" />
                      <View style={styles.inputView}>
                          <TextInput
                              style={styles.TextInput}
                              placeholder="Enter Email"
                              placeholderTextColor="#003f5c"
                              keyboardType="email-address"
                              secureTextEntry={false}
                              autoCapitalize={"none"}
                              autoCorrect={false}
                              onChange={(event, inputEmail) => this.setState({email: inputEmail})}
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
                              onChange={(event, inputPassword) => this.setState({password: inputPassword})}
                          />
                      </View>
                      <TouchableOpacity>
                          <Text style={styles.forgot_button}>Forgot Password?</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Text style={styles.register_button}>
                              Don't have an account yet?
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.loginButton}>
                          <Text 
                          style={styles.loginText} 
                          onPress={loginUser}
                          onChange={(session) => setSession(session)}
                          >LOGIN</Text>
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
    }
}

export Login