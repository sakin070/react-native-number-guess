import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import React, {useState} from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if(isLoading){
    return <AppLoading startAsync={fetchFonts} onFinish={() => {setIsLoading(false)}} onError={(err) => {console.log(err);}}/>
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  }

  const gameOverHandler = (numberOfRounds) => {
    setRounds(numberOfRounds);
  }

  const gameRestartHander = () => {
    setRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && rounds<=0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }else if(rounds>0){
    content = <GameOverScreen restartGameHandler={gameRestartHander} rounds={rounds} guess={userNumber}/>
  }
  return (
    <View style={styles.screen}>
        <Header title='Guess a Number'/>
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
