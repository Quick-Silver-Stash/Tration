import React, {Component, useState} from 'react';
import {  View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback   } from 'react-native';
import Quest from './Quest/Quest';

function Quests(){
  const [selectedQuest, setSelectedQuest] = useState({});
  const [showQuest, setShowQuest] = useState(false);

  /*Will have to later determine how a quest comes in*/
  function selectQuest(quest){
    setSelectedQuest({
      name: "quest1"
    });
    setShowQuest(true)
  };

  function closeQuest(){
    setSelectedQuest(null);
    setShowQuest(false);
  }

  return(
    <View style = {{height: '100%'}}>
      <View style = {styles.topContainer}>
        <Text style = {styles.headline}>Quests</Text>
      </View>
      <View style = {styles.categoryContainer}>
          <TouchableOpacity>
            <View style = {styles.categoryToggle}>
              <Text style = {styles.categoryText}>Daily</Text>
            </View>
          </TouchableOpacity>
        <View style = {styles.categoryToggle}>
          <TouchableOpacity>
            <View style = {styles.categoryToggle}>
              <Text style = {styles.categoryText}>Extended</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.questsContainer}>
        <ScrollView
          contentContainerStyle = {styles.scrollQuest}
          bounces = {true}
          nestedScrollEnabled = {true}
        >
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Eat 2000 calories</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Run 3 miles</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Sleep 8 hours</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Drink a liter of water</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Cry 500ml to release the water</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Eat 3 meals</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Stretch for 15 minutes before work</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Stretch for 15 minutes before going to bed</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Go to bed before midnight</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.quest} onPress={() => selectQuest()}>
            <Text style = {styles.questText}>Eat one healthy meal per day</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Modal
        transparent={true}
        visible= {showQuest}
        animationType="fade"
      >
        <TouchableOpacity style = {styles.modalView} onPress={() => closeQuest()}>
          <View style = {{height:'50%', width:'90%'}}>
            <TouchableOpacity activeOpacity = {1}>
              <Quest pressCancel = {() => setShowQuest(false)}/>
            </TouchableOpacity >
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    topContainer:{
      backgroundColor: '#219DFC',
      height: '10%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    headline: {
      fontWeight: 'bold',
      fontSize: 30,
      alignSelf: 'flex-end',
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      elevation: 10,
      backgroundColor: '#ECEEF3',
      paddingVertical: 25,
      marginBottom: 10
    },
    categoryToggle: {
      backgroundColor: '#219DFC',
      width: 150,
      height: 50,
      borderRadius: 10,
      elevation: 20,
      justifyContent: 'center'
    },
    categoryText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },
    questsContainer: {
      height: "70%"
    },
    quest:{
      elevation:15,
      backgroundColor: '#2BC803',
      height: 50,
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 30,
      justifyContent: 'center'
    },
    questText:{
      flexDirection: 'column',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      justifyContent: 'center'
    },
    modalView: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
})

export default Quests;
