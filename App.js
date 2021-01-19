import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quests from './src/screens/Quests/Quests';

export default function App() {
  return (
    <View style={styles.container}>
      {
        /*
        Put our designs here for now while we don't have a nav bar
        <Quests />
        */
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});