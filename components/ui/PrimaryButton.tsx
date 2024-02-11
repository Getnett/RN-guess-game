import { FC } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: VoidFunction;
}
const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    elevation: 2,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
