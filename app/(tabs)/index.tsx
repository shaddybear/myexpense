import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@/constants/theme";

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        // source={require('../assets/images/welcome1.jpg')}
        // source={require('../../../../assets/images/welcome1.jpg')}
        source={require('../../assets/images/welcome2.jpg')}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
 logo: {
    height: "20%",
    aspectRatio: 1,
 }
});