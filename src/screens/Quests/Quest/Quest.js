import React, {Component, useState} from 'react';
import {  View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, Modal   } from 'react-native';

function Quest(props){
  return(
    <View style = {styles.screen}>
      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>Eat 3 meals per day</Text>
      </View>
      <View style = {styles.descContainer}>
        <Text style = {{fontWeight: 'bold', paddingBottom:15}}>Description</Text>
        <Text style = {styles.description}>Try to eat 3 meals per day. Eat a meal at 9am, 1pm, and 6pm. Try to do everything with give or take one hour</Text>
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
      height: '50%',
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
      marginVertical: 20
    },
    description: {
      fontSize: 15
    },
    buttonContainer: {
      flexDirection: 'row'
    },
    button: {
      backgroundColor: '#219DFC',
      width: '50%',
      height: '55%',
      elevation: 20,
      justifyContent: 'center'
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
    },
})

export default Quest;
