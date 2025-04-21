import React from 'react'
import { Text } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

function CondoText({text, styles}) {
  return (
    <Text style={{color:COLORS.MainText, fontSize: SIZES.medium, ...styles}}>{text}</Text>
  )
}

export default CondoText