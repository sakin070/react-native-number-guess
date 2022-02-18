import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';

const GameOverScreen = (props) => {
  return (
    <View style={styles.scren}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Number was: {props.guess}</Text>
      <Button title="New Game" onPress={props.restartGameHandler}/>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    scren:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
});
