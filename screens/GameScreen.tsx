import { FC, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextOutlined from "../components/ui/TextOutlined";
import ComputerGuess from "../components/game/ComputerGuess";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import LabelText from "../components/ui/LabelText";
import GuessLogItem from "../components/game/GuessLogItem";

function randomNumberComputerGuessed(
  min: number,
  max: number,
  exclude: number
): number {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return randomNumberComputerGuessed(min, max, exclude);
  }
  return randNum;
}

interface GameScreenProps {
  userNumber: number;
  gameOver: (guesscount: number) => void;
}

type GuessType = "lower" | "higher";

let minGuessValue = 1;
let maxGuessValue = 100;

const GameScreen: FC<GameScreenProps> = ({ userNumber, gameOver }) => {
  const initialGuess = randomNumberComputerGuessed(1, 100, userNumber);
  const [computerGuess, setComputerGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState<number[]>([initialGuess]);
  const { width, height } = useWindowDimensions();

  if (computerGuess === userNumber) {
    minGuessValue = 1;
    maxGuessValue = 100;
    setTimeout(() => {
      gameOver(guesses.length);
    }, 2000);
  }

  const allowComputerToGuess = (direction: GuessType) => {
    if (computerGuess === userNumber) {
      return;
    }
    if (
      (direction === "lower" && computerGuess < userNumber) ||
      (direction === "higher" && computerGuess > userNumber)
    ) {
      Alert.alert(
        "Dont' Lie",
        "Allow the computer to guess the right boundry",
        [{ style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      maxGuessValue = computerGuess;
    } else {
      minGuessValue = computerGuess + 1;
    }

    const guess = randomNumberComputerGuessed(
      minGuessValue,
      maxGuessValue,
      computerGuess
    );

    setComputerGuess(guess);
    setGuesses((prevGuess) => [guess, ...prevGuess]);
  };

  const contentPortrait = (
    <>
      <ComputerGuess>{computerGuess}</ComputerGuess>
      <Card>
        <View style={styles.labelContainer}>
          <LabelText style={styles.labelText}>Higher or Lower ? </LabelText>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={allowComputerToGuess.bind(undefined, "lower")}
            >
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={allowComputerToGuess.bind(undefined, "higher")}
            >
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  const contentLandScape = (
    <View style={styles.landScapeContentContainer}>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={allowComputerToGuess.bind(undefined, "lower")}>
          <Ionicons name="remove" size={24} color="white" />
        </PrimaryButton>
      </View>

      <ComputerGuess>{computerGuess}</ComputerGuess>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={allowComputerToGuess.bind(undefined, "higher")}>
          <Ionicons name="add" size={24} color="white" />
        </PrimaryButton>
      </View>
    </View>
  );

  const content = width < height ? contentPortrait : contentLandScape;

  return (
    <View style={styles.screenContainer}>
      <TextOutlined>Opponent's Guess</TextOutlined>
      {content}
      <View style={styles.logContainer}>
        <FlatList
          data={guesses}
          alwaysBounceVertical={false}
          renderItem={({ item, index }) => (
            <GuessLogItem round={guesses.length - index} guess={item} />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },

  text: {
    textAlign: "center",
    marginTop: 16,
  },
  labelContainer: {
    marginTop: 16,
  },
  labelText: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  logContainer: {
    flex: 1,
    marginTop: 16,
    alignItems: "center",
    padding: 8,
  },
  logValue: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
  landScapeContentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
