import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("Pressed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#670436" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
