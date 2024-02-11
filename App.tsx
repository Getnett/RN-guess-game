import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar as RNStatusBar,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [numOfGuess, setNumGuess] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  console.log("fontsLoading", fontsLoaded);

  const handleGameStarted = (number: number) => {
    setUserNumber(number);
  };

  const gameOver = (guessCount: number) => {
    setIsGameOver(true);
    setNumGuess(guessCount);
  };

  const restartGame = () => {
    setUserNumber(undefined);
    setIsGameOver(false);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen gameStarted={handleGameStarted} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOver={gameOver} />;
  }
  if (isGameOver) {
    screen = (
      <GameOverScreen
        guessCount={numOfGuess}
        numberToGuess={userNumber!}
        restart={restartGame}
      />
    );
  }
  return (
    <LinearGradient colors={["#4e092c", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.innerSafeAreaContainer}>{screen}</View>
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
  },
  innerSafeAreaContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
