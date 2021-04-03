import React, {Component,  useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Diary from '../../components/Diary/Diary';

function Profile(){
  /*Potentially for use when we have user session data*/
  const [userData, setUserData] = useState({});

  return (
    <View style = {{height: '100%'}}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: 'https://picsum.photos/id/237/200/300'}} />
        <Text style={styles.name}>Doggo Wooferson, 10</Text>
        <Text style={styles.streak}>20 Day Streak</Text>
      </View>
      <View style={styles.body}>
      
      </View>
      <View style = {styles.diary}>
        <Diary />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flex: 2,
    marginTop: 50,
    alignItems: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    marginBottom:10,
  },
  name:{
    fontSize:20,
    color: "#000",
    margin: 10,
    fontWeight: "600"
  },
  streak:{
    fontSize: 15,
    color: "#000",
    margin: 10,
    fontWeight: '600',
  },
  body:{
    marginTop:40,
    marginBottom:0,
    flex: 3
  },
  diary: {
    flex: 3,
    margin: 20
  }
});

export default Profile;
