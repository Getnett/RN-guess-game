import { FC, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

interface CardProps {
  children: ReactNode;
}
const Card: FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 40,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 60,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
