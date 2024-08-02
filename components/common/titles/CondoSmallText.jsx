import React from 'react'
import { Text } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

function CondoSmallText({text}) {
  return (
    <Text style={{color:COLORS.MainText, fontSize: SIZES.small, marginBottom:SIZES.small}}>{text}</Text>
  )
}

export default CondoSmallText