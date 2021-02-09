import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  View,
} from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  handleChange = name => event => {
    console.log('Typed ', event.target.value);
    this.setState({
      [name]: event.target.value
    })
    console.log("email: ", this.email);
    console.log("password: ", this.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./assets/placeholder-logo-1.png")}
        />
        <StatusBar style='auto'/>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Email"
            placeholderTextColor="#003f5c"
            keyboardType="email-address"
            secureTextEntry={false}
            autoCapitalize={false}
            autoCorrect={false}
            onChange={this.handleChange('email')}
            value={this.state.email}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            autoCapitalize={false}
            autoCorrect={false}
            onChange={this.handleChange('password')}
            value={this.state.pasword}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.register_button}>Already have an account yet? Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
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

export default Register