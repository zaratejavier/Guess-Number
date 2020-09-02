import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header'
import StartGameScreen from "./Screens/StartGameScreen"

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"} />
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
