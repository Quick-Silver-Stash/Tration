import React, {Component} from 'react';
import {  View, Text, StyleSheet  } from 'react-native';

const quests = (props) => {
  return(
    <View style = {styles.quests}>
      <Text style = {{fontWeight: 'bold', fontSize: 20, marginBottom:10}}>Daily Quests</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  quests: {
      flex: 1,
      marginHorizontal: 20,
      height:50
  }
})

export default quests;
