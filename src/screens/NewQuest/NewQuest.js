import React, {Component, useState} from 'react';
import {  View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/functions';

function NewQuest(props){
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedType, setSelectedType] = useState("")
  const [selectedFreq, setSelectedFreq] = useState("")

  let req = {
    title: title,
    description: desc,
    questType: selectedType,
    questFrequency: selectedFreq,
    isComplete: false,
    isActive: true,
    createdOn: "2021-03-17",
    updatedOn: "2021-03-17",
    userId: "justin.do"
  }

  function sendQuest(){
    const newQuest = firebase.functions().httpsCallable('addQuest');
    newQuest(req)
    .then(result => {
      console.log("Result writing")
      console.log(result)
    })
    .catch(error => {
      console.log("error happened")
      console.log(error);
    });
    /*After submitting, close the modal*/
    props.closeModal()
  }


  return(
    <View style = {{height: '100%', backgroundColor: 'white'}}>
      <View style = {styles.topContainer}>
        <Text style = {styles.headline}>Add Quest</Text>
      </View>
      <View style = {styles.title}>
        <TextInput
          label = "Title"
          style={styles.textInput}
          onChangeText = {(text) => setTitle(text)}
          value = {title}
          placeholder = "Enter Title"
        />
      </View>
      <View style = {styles.description}>
        <TextInput
          label = "Description"
          style={styles.textInput}
          onChangeText = {(text) => setDesc(text)}
          value = {desc}
          placeholder = "Enter Description"
        />
      </View>
      <View style = {styles.questType}>


        <View style = {styles.qTypeContainer}>
          <TouchableOpacity style = {[styles.qTypeButton, {backgroundColor: selectedType == "Nutrition" ? '#9370DB' : '#ADD8E6'}]}  onPress={() => setSelectedType("Nutrition")}>
            <Text style = {styles.buttonText}>Nutrition</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.qTypeButton, {backgroundColor: selectedType == "Excercise" ? '#9370DB' : '#ADD8E6'}]} onPress={() => setSelectedType("Excercise")}>
            <Text style = {styles.buttonText}>Excercise</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.qTypeButton, {backgroundColor: selectedType == "Rest" ? '#9370DB' : '#ADD8E6'}]} onPress={() => setSelectedType("Rest")}>
            <Text style = {styles.buttonText}>Rest</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style = {styles.questFrequency}>
        <View style = {styles.qFreqContainer}>
          <TouchableOpacity style = {[styles.qFreqButton, {backgroundColor: selectedFreq == "Daily" ? '#9370DB' : '#ADD8E6'}]}  onPress={() => setSelectedFreq("Daily")}>
            <Text style = {styles.buttonText}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.qFreqButton, {backgroundColor: selectedFreq == "Extended" ? '#9370DB' : '#ADD8E6'}]} onPress={() => setSelectedFreq("Extended")}>
            <Text style = {styles.buttonText}>Extended</Text>
          </TouchableOpacity>
        </View>


      </View>
      <View style = {styles.decisionButtonContainer}>
          <TouchableOpacity style = {[styles.decisionButton, {backgroundColor: '#F43838'}]}  onPress= {props.closeModal}>
            <Text style = {styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {[styles.decisionButton, {backgroundColor: '#2BC803'}]} onPress= {() => sendQuest()}>
            <Text style = {styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  topContainer:{
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
  title:{
    flex: 1,
    alignItems: 'center',
    marginVertical: 10
  },
  description: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10
  },
  questType: {
    flex: 2,
    alignItems: 'center',
    marginVertical: 10
  },
  questFrequency: {
    flex: 2,
    alignItems: 'center'
  },
  textInput: {
    width: '90%',
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
  },
  qTypeContainer: {
    width: '80%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  qTypeButton: {
    flex: 1,
    height: '30%',
    elevation: 20,
    justifyContent: 'center',
    borderRadius: 20,
  },
  qFreqContainer: {
    width: '90%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  qFreqButton: {
    flex: 1,
    height: '30%',
    elevation: 20,
    justifyContent: 'center',
    borderRadius: 20,
  },
  decisionButtonContainer: {
    flexDirection: 'row',
    flex: 1
  },
  decisionButton: {
    width: '50%',
    height: '100%',
    elevation: 20,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  }
})

export default NewQuest;
