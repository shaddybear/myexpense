import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'

const ScreenWrapper = ({style, children}: ScreenWrapperProps ) => {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})