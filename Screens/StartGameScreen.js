import React, { useState } from "react"
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from "../Components/Card"
import Colors from "../constants/colors"
import Input from "../Components/Input"

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('')

  const numberInputHandler = (inputText) => {
    console.log(inputText)
    setEnteredValue(inputText.replace(/[^0-9]/g,''))
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}  
            onChangeText={numberInputHandler}
            // onChangeText={(e) => setEnteredValue(e.target.value.replace(/[^0-9]/g,''))}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={() => { }} color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={() => { }} color={Colors.primary}/>
            </View>
          </View>
        </Card>
        {/* <Card>
          <Text>What the FUUUUUUHHHHH</Text>
        </Card> */}
      </View>
    </TouchableWithoutFeedback>
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
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
})

export default StartGameScreen