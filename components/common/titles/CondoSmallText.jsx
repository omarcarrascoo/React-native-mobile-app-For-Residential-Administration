import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

function CondoSmallText({text, stylish}) {
  return (
    <Text style={stylish?[styles.normal, styles]:styles.main}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  main:{
    color:COLORS.MainText, 
    fontSize: SIZES.small, 
    marginBottom:SIZES.small
  },
  normal:{
    color:COLORS.MainText, 
    fontSize: SIZES.small, 
  }
})
export default CondoSmallText