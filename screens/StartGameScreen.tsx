import { FC } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/colors";
import TextOutlined from "../components/ui/TextOutlined";
import Card from "../components/ui/Card";
import LabelText from "../components/ui/LabelText";

interface StartGameScreenProps {
  gameStarted: (value: number) => void;
}

const StartGameScreen: FC<StartGameScreenProps> = ({ gameStarted }) => {
  const [inputNumber, setInputNumber] = useState("");

  const handleResetGame = () => {
    gameStarted(0);
  };

  const handleStartGame = () => {
    const number = parseInt(inputNumber);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid Number!",
        "Input number should be between 1 and 99",
        [
          {
            text: "Ok",
            style: "destructive",
            onPress: () => setInputNumber(""),
          },
        ]
      );
      return;
    }
    gameStarted(number);
  };

  const handleTextInput = (text: string) => {
    setInputNumber(text);
  };

  return (
    <View style={styles.screenContainer}>
      <TextOutlined>Guess My Number</TextOutlined>
      <Card>
        <LabelText>Enter a number</LabelText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={inputNumber}
          onChangeText={handleTextInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleResetGame}>Cancel</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleStartGame}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 60,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    marginVertical: 8,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
