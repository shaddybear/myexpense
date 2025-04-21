import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/constants/Typo'

const index = () => {
  return (
    <ScreenWrapper>
     <Typo size={40} fontWeight={700} color='green'> welcome page </Typo>
    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({})