import React from 'react'
import { Text } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

function CondoText({text}) {
  return (
    <Text style={{color:COLORS.MainText, fontSize: SIZES.medium}}>{text}</Text>
  )
}

export default CondoText