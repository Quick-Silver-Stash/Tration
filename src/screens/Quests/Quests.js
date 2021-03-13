import React, {Component, useState, useEffect } from 'react';
import {  View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback   } from 'react-native';
import Quest from './Quest/Quest';
import NewQuest from '../NewQuest/NewQuest';
import Icon from "react-native-vector-icons/FontAwesome";
import {db} from '../../firebase/firebase';

function Quests(){
  const [selectedQuest, setSelectedQuest] = useState({
    title: null,
    description: null,
    questType: null,
    questFrequency: null,
    isComplete: null,
    isActive: null,
    createdOn: null,
    updatedOn: null,
    userId: null
  });
  const [allQuests, setAllQuests] = useState([]);
  const [showQuest, setShowQuest] = useState(false);
  const [showNewQuest, setShowNewQuest] = useState(false);

  useEffect(() => {
    db.ref('/quests').on('value', querySnapShot => {
      /*An array to store data relevant to the user*/
       let dataObjects =  [];
       /*Loop over queried quests and retrieve only relevant data*/
       querySnapShot.forEach(d => {
         let data = d.val()
         dataObjects.push({
           title: data.title,
           description: data.description,
           questType: data.questType,
           questFrequency: data.questFrequency,
           isComplete: data.isComplete,
           isActive: data.isActive,
           createdOn: data.createdOn,
           updatedOn: data.updatedOn,
           userId: data.userId
         })
       });
      setAllQuests(dataObjects)
    })
  }, []);

  /*Single quest has been selected and showing single quest screen*/
  function selectQuest(quest){
    let obj = {
      title: quest.title,
      description: quest.description,
      questType: quest.questType,
      questFrequency: quest.questFrequency,
      isComplete: quest.isComplete,
      isActive: quest.isActive,
      createdOn: quest.createdOn,
      updatedOn: quest.updatedOn,
      userId: quest.userId
    }
    setSelectedQuest(obj);
    setShowQuest(true)
  };

  /*Clicking away from single quest screen*/
  function closeQuest(){
    setSelectedQuest({
      title: null,
      description: null,
      questType: null,
      questFrequency: null,
      isComplete: null,
      isActive: null,
      createdOn: null,
      updatedOn: null,
      userId: null
    });
    setShowQuest(false);
  }

  /*Create a TouchableOpacity of every quest that is relevant to the user*/
  let displayQuests = allQuests.map(q => {
    /*Change color of quest displayed depending on isActive*/
    return <TouchableOpacity
      style = {[styles.quest, {backgroundColor: q.isActive ? '#2BC803' : '#F43838'}]}
      onPress={() => selectQuest(q)}
      key = {q.title}
    >
      <Text style = {styles.questText}> {q.title} </Text>
    </TouchableOpacity>
  });

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
          <TouchableOpacity>
            <View style = {styles.categoryToggle}>
              <Text style = {styles.categoryText}>Extended</Text>
            </View>
          </TouchableOpacity>
      </View>
      <View style = {styles.questsContainer}>
        <ScrollView
          contentContainerStyle = {styles.scrollQuest}
          bounces = {true}
          nestedScrollEnabled = {true}
        >
          {displayQuests}
        </ScrollView>
      </View>
      <View style = {styles.newQuestView}>
        <TouchableOpacity
          style={styles.newQuestButton}
          onPress={() => setShowNewQuest(true)}
        >
          <Icon name={"plus"}  size={30} color="#219DFC" />
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible= {showQuest}
        animationType="fade"
      >
        <TouchableOpacity style = {styles.modalView} onPress={() => closeQuest()}>
          <View style = {{height:'50%', width:'90%'}}>
            <TouchableOpacity activeOpacity = {1}>
              <Quest
                pressCancel = {() => setShowQuest(false)}
                questData = {selectedQuest}
              />
            </TouchableOpacity >
          </View>
        </TouchableOpacity>
      </Modal>
      <Modal
        transparent={true}
        visible= {showNewQuest}
        animationType="fade"
      >
        <TouchableOpacity style = {styles.modalView} onPress={() => setShowNewQuest(false)}>
          <View style = {{height:'70%', width:'90%'}}>
            <TouchableOpacity activeOpacity = {1}>
              <NewQuest
                pressCancel = {() => setShowNewQuest(false)}
              />
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
      flex: 1,
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
      height: "70%",
      flex: 10
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
    },
    newQuestView: {
      flexDirection: 'row-reverse',
    },
    newQuestButton: {
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:70,
      height:70,
      backgroundColor:'#fff',
      borderRadius:50,
    }
})

export default Quests;
