import React, {Component, useState} from 'react';
import {  View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';

function AddQuest(props){
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedType, setSelectedType] = useState("")
  const [selectedFreq, setSelectedFreq] = useState("")
  return(
    <View style = {{height: '100%'}}>
      <View style = {styles.topContainer}>
        <Text style = {styles.headline}>Add Quest</Text>
      </View>
      <View style = {styles.title}>
        <TextInput
          style={styles.textInput}
          onChangeText = {(text) => setTitle(text)}
          value = {title}
          placeholder = "Enter Quest Title"
        />
      </View>
      <View style = {styles.description}>
        <TextInput
          style={styles.textInput}
          onChangeText = {(text) => setDesc(text)}
          value = {desc}
          placeholder = "Enter Quest Description"
        />
      </View>
      <View style = {styles.questType}>


        <View style = {styles.qTypeContainer}>
          <TouchableOpacity style = {[styles.qTypeButton, {backgroundColor: '#ADD8E6'}]}  onPress={type => setSelectedType(type)}>
            <Text style = {styles.qTypeButtonText}>Nutrition</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.qTypeButton, {backgroundColor: '#00BFFF'}]} onPress={type => setSelectedType(type)}>
            <Text style = {styles.qTypeButtonText}>Excercise</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.qTypeButton, {backgroundColor: '#9370DB'}]} onPress={type => setSelectedType(type)}>
            <Text style = {styles.qTypeButtonText}>Rest</Text>
          </TouchableOpacity>
        </View>


      </View>
      <View style = {styles.questFrequency}>

        <View style = {styles.qFreqContainer}>
          <TouchableOpacity style = {[styles.qFreqButton, {backgroundColor: '#ADD8E6'}]}  onPress={type => setSelectedType(type)}>
            <Text style = {styles.qFreqButtonText}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.qFreqButton, {backgroundColor: '#9370DB'}]} onPress={type => setSelectedType(type)}>
            <Text style = {styles.qFreqButtonText}>Extended</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  topContainer:{
    backgroundColor: '#219DFC',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
  title:{
    flex: 1,
    alignItems: 'center'
  },
  description: {
    flex: 1,
    alignItems: 'center'
  },
  questType: {
    flex: 1,
    alignItems: 'center'
  },
  questFrequency: {
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    width: '90%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
  },
  qTypeContainer: {
    width: '90%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  qTypeButton: {
    flex: 1,
    height: '40%',
    elevation: 20,
    justifyContent: 'center',
  },
  qTypeButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  qFreqContainer: {
    width: '90%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  qFreqButton: {
    flex: 1,
    height: '40%',
    elevation: 20,
    justifyContent: 'center',
  },
  qFreqButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
})

export default AddQuest;
