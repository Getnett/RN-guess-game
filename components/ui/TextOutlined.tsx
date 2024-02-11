import { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface TextOutlinedProps {
  children: ReactNode;
}

const TextOutlined: FC<TextOutlinedProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default TextOutlined;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
