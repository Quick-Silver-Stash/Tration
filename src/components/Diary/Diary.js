import React, { Component, useState, useEffect } from 'react';
import Swiper from 'react-native-swiper'
import {  View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase/app';
import {db} from '../../firebase/firebase';
import 'firebase/functions';
let today = new Date().toISOString().slice(0, 10)
today = new Date(today);

function Diary(props){
  const [weekQuests, setWeekQuests] = useState([],[],[],[],[],[],[])

  useEffect(() => {
    db.ref('/quests').on('value', querySnapShot => {
      /*An array to store data relevant to the user*/
       let dataObjects =  [[],[],[],[],[],[],[]];
       var date = new Date().getDate()
       /*Loop over queried quests and retrieve only relevant data*/
       querySnapShot.forEach(d => {
         let data = d.val()
         let dataDate = new Date(data.updatedOn);
         let dayDiff = (today - dataDate) / (1000 * 60 * 60 * 24);
         if(dayDiff < 7){
           dataObjects[dayDiff].push(
             <TouchableOpacity
               style = {[styles.quest, {backgroundColor: data.isActive ? '#2BC803' : '#F43838'}]}
               key = {data.title}
             >
                <Text style={styles.text} key = {data.description}>{data.title}</Text>
             </TouchableOpacity>
           )
         }
       });
      let diaryPages = [[],[],[],[],[],[],[]];
      for(let i = 0; i < 7; i++){
        diaryPages[i].push(
          <View style={styles.diaryPage} key = {i}>
            <Text style={styles.text} key = {i}>Page {i}</Text>
          </View>
        )
      }
      setWeekQuests(diaryPages)
    })
  }, []);

  return(
    <View style = {{height: '100%'}}>
      <Swiper style={styles.wrapper} showsButtons={true} loop={false} showsPagination = {false}>
        {weekQuests}
      </Swiper>
    </View>
  )
}


const styles = StyleSheet.create({
  diaryPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
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
})

export default Diary;
