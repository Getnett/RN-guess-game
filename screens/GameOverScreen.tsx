import { FC } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import TextOutlined from "../components/ui/TextOutlined";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverScreenProps {
  restart: VoidFunction;
  guessCount: number;
  numberToGuess: number;
}
const GameOverScreen: FC<GameOverScreenProps> = ({
  restart,
  guessCount,
  numberToGuess,
}) => {
  const { width, height } = useWindowDimensions();
  const imageSize = 300;

  let imageContainer = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    margin: 24,
  };

  if (width > height) {
    imageContainer = {
      width: imageSize / 2,
      height: imageSize / 2,
      borderRadius: imageSize / 4,
      margin: 16,
    };
  }

  const summaryTextMargin = width < height ? 24 : 16;

  return (
    <View style={styles.screenContainer}>
      <TextOutlined>Game is Over!</TextOutlined>
      <View style={[styles.imageContainer, imageContainer]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={[styles.summmaryText, { marginBottom: summaryTextMargin }]}>
        Your phone needed <Text style={styles.highlightText}>{guessCount}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlightText}>{numberToGuess}</Text>
      </Text>
      <PrimaryButton onPress={() => restart()}>Start New Game</PrimaryButton>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summmaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
