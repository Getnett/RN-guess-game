import { FC, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

interface ComputerGuessProps {
  children: ReactNode;
}
const ComputerGuess: FC<ComputerGuessProps> = ({ children }) => {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
export default ComputerGuess;

const styles = StyleSheet.create({
  displayContainer: {
    padding: 24,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.secondary500,
    marginTop: 16,
  },
  text: {
    color: Colors.secondary500,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
});
