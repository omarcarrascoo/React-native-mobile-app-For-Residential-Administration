import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

function CondoSubTitle({Title, styling}) {
  return (
    <Text style={styling?[styles.title, styling] : [styles.title, {marginVertical:SIZES.medium }]}>{Title}</Text>
  )
}
const styles = StyleSheet.create({
    title:{
      fontSize:SIZES.large, 
      color: COLORS.MainText, 
      fontWeight:400, 
    }
})

export default CondoSubTitle