import React, {Component, useState} from 'react';
import {  View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, Modal   } from 'react-native';

function Quest(props){
  return(
    <View style = {styles.screen}>
      <View style = {styles.details}>
        <View style = {styles.titleContainer}>
          <Text style = {styles.title}>Eat 3 meals per day</Text>
        </View>
        <View style = {styles.descContainer}>
          <Text style = {styles.description}>Try to eat 3 meals per day. Eat a meal at 9am, 1pm, and 6pm. Try to do everything with give or take one hour</Text>
        </View>
      </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity style = {[styles.button, {backgroundColor: '#F43838'}]}  onPress={props.pressCancel}>
          <Text style = {styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.button, {backgroundColor: '#2BC803'}]} onPress={props.pressCancel}>
          <Text style = {styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: 'white',
      width:'100%',
      height: '80%',
    },
    details:{
      flex: 1
    },
    titleContainer:{
      height:'10%',
      paddingVertical: 20,
    },
    title:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    },
    descContainer: {
      marginTop: 20,
      justifyContent: 'center',
    },
    description: {
      fontSize: 15,
      textAlign: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      flex: 1
    },
    button: {
      width: '50%',
      height: '50%',
      elevation: 20,
      justifyContent: 'center',
      alignSelf: 'flex-end'
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
    },
})

export default Quest;
