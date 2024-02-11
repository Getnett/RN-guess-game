import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

interface GuessLogItem {
  round: number;
  guess: number;
}

const GuessLogItem: FC<GuessLogItem> = ({ round, guess }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>#{round}</Text>
      <Text style={styles.itemText}>{guess}</Text>
    </View>
  );
};
export default GuessLogItem;

const styles = StyleSheet.create({
  item: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: Colors.secondary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
