import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 25,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,

    // 안드로이드용 shadow
    elevation: 10,

    // iOS용 shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
