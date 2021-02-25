import React, {Component, useState} from 'react';
import Swiper from 'react-native-swiper'
import {  View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/functions';

function Diary(props){
  /*Set to simple numbers for now but will become data pulled from firebase eventually*/
  const [weeklyDiary, setWeeklyDiary] = useState([1,2,3,4,5,6,7]);

  /*Create a view for each diary item that is loaded*/
  let diaryPages = weeklyDiary.map(d => {
    return(
      <View style={styles.diaryPage}>
        <Text style={styles.text}>Page {d}</Text>
      </View>
    )
  })

  return(
    <View style = {{height: '100%'}}>
      <Swiper style={styles.wrapper} showsButtons={true} loop={false} showsPagination = {false}>
        {diaryPages}
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
  }
})

export default Diary;
