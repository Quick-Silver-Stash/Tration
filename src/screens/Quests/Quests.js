import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity   } from 'react-native';

class Quests extends Component{
  render(){
    return(
      <View style = {styles.screen}>
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
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Eat 2000 calories</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Run 3 miles</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Sleep 8 hours</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Drink a liter of water</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Cry 500ml to release the water</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Eat 3 meals</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Stretch for 15 minutes before work</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Stretch for 15 minutes before going to bed</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Go to bed before midnight</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.quest}>
              <Text style = {styles.questText}>Eat one healthy meal per day</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    screen: {
    },
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
      height: "70%",
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
    }
})

export default Quests;
