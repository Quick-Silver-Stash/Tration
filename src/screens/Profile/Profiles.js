import React, {Component,  useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableHighlight
} from "react-native";

export default class Profile extends Component {
  const [userData, setUserData] = useState({});
  render() {

      return (
        <View style={styles.profileContainer}>
          <View style={styles.header}>
            <Image style={styles.image} source={{uri: 'https://webstatic-sea.mihoyo.com/hk4e/upload/fb/common.jpg'}}></Image>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGIW7ZKxxiwIA/profile-displayphoto-shrink_200_200/0/1554843100487?e=1616630400&v=beta&t=AvXzVQHnRqWIil_QhqQ_8GfvRss6q2fkJQSjcxrUan8'}} />
          <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.bodyContent}>
                  <Text style={styles.name}>   Ivan Chen</Text>
                  <Text style={styles.info}>  Age: 24</Text>
                  <Text style={styles.description}>Drinking bubble team, playing Genshin Impact, going to sleep late, and being salty</Text>
                  <TouchableHighlight style={styles.highlightContainer}>
                    <Text style={{padding: 10, fontSize: 22, fontWeight: "900"}}> Level 8</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.highlightContainer}>
                    <Text style={{padding: 10, fontSize: 22, fontWeight: "900"}}> 500052 Tration</Text>
                  </TouchableHighlight>
                </ScrollView>
          </View>
          <Text style={styles.info}>Navbar Filler</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  profileContainer: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf:'center',
    position: 'absolute',
    marginTop: 0
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
    alignItems: "center"
  },
  body:{
    marginTop:40,
    marginBottom:0,
    flex: 1
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  name:{
    fontSize:36,
    fontWeight: '500',
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:22,
    color: "#00BFFF",
    marginTop:10,
    fontWeight: '500',
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center',
    fontWeight: '400',
  },
  highlightContainer: {
    marginTop:10,
    height:80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",
    backgroundColor: "#add8e6"
  },
  highlightContainerOnPress: {
    marginTop:10,
    height:80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",
    backgroundColor: "#000080"
  }
});
