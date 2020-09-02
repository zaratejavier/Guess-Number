import React from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a number</Text>
          <TextInput />
          <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={() => { }} />
            <Button title="Confirm" onPress={() => { }}/>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  }
})

export default StartGameScreen