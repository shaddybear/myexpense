import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";

const index = () => {
    const router = useRouter();
    useEffect(()=>{
      setTimeout(() => {
           router.push('/(tabs)/(auth)/welcome')
      }, 2000);
    }, [])
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../assets/images/welcome.png')}
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
    height: "40%",
    aspectRatio: 1,
 }
});