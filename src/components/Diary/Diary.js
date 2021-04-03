import React, { Component, useState, useEffect } from 'react';
import {  View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from 'firebase/app';
import {db} from '../../firebase/firebase';
import 'firebase/functions';

let today = new Date().toISOString().slice(0, 10)
today = new Date(today);

function Diary(props){
  const [weekQuests, setWeekQuests] = useState([[],[],[],[],[],[],[]]);

  useEffect(() => {
    db.ref('/quests').on('value', querySnapShot => {
      /*An array to store data relevant to the user*/
       let dataObjects =  [[],[],[],[],[],[],[]];
       var date = new Date().getDate();
       /*Loop over queried quests and retrieve only relevant data*/
       querySnapShot.forEach(d => {
         let data = d.val();
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
            {dataObjects[i].length == 0 ? <Text>No Items</Text> : dataObjects[i]}
          </View>
        )
      }
      setWeekQuests(diaryPages);
    })
  }, []);

  return(
    <View style = {{height: '100%'}}>
      <View style = {styles.headerContainer}>
        <View style={{flex: 1}}></View>
        <View style = {styles.titleContainer}>
          <Text style = {styles.title}>Diary</Text>
        </View>
        <View style = {styles.iconContainer}>
          <Icon name="calendar" size={25} color={'#000'} />
        </View>
      </View>
      <Swiper showsButtons={true} loop={false} showsPagination = {false}>
        {weekQuests}
      </Swiper>
    </View>
  )
}


const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  diaryPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 10
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
