import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header'
import StartGameScreen from "./Screens/StartGameScreen"
import GameScreen from './Screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>
  
  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/> 
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a number"} />
      {content}
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
