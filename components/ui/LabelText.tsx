import { FC, ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { Colors } from "../../constants/colors";

interface LabelTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}
const LabelText: FC<LabelTextProps> = ({ children, style }) => {
  return <Text style={[styles.labelText, style]}>{children}</Text>;
};
export default LabelText;

const styles = StyleSheet.create({
  labelText: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    color: Colors.secondary500,
    fontSize: 24,
  },
});
