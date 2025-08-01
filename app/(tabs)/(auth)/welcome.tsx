import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'

const index = () => {
  return (
    <ScreenWrapper>
     {/* <Typo size={40} fontWeight={700} color='green'> welcome page </Typo>
     <View style={styles.container}>
  {/* login button & image */}
  <View>
    <TouchableOpacity style={styles.loginButton}>
      <Typo fontWeight={"500"}>Sign in</Typo>
    </TouchableOpacity>

    <Image
      source={require("../assets/images/welcome2.png")} // Adjust the path as necessary
      style={styles.welcomeImage}
      resizeMode="contain"
    />
<View style={styles.footer}>
    
</View>

  </View>

    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});