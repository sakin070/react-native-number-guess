import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const handleInput = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const handleResetInput = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    const handleConfirmInput = () => {
        Keyboard.dismiss();
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid number!",
                "Number has to be a number between 1 and 99.",
                [{ text: "Okay", style: "destructive", onPress: handleResetInput }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
    };
    let confirmedMessage;
    if (confirmed) {
        confirmedMessage = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        );
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.screen}>
                <Text>Start New Game</Text>
                <Card style={styles.inputContiainer}>
                    <Text style={styles.title}>Select a Number!</Text>
                    <Input style={styles.input} blurOnSubmit keyboardType={"number-pad"} maxLength={2} value={enteredValue} onChangeText={handleInput} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={handleResetInput} color={Colors.accent} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={handleConfirmInput} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedMessage}
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        width: '100%'
    },
    inputContiainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        paddingVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    button: {
        width: 100
    },
    input: {
        width: 55,
        textAlign: 'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    }
})

export default StartGameScreen;