import React from 'react'
import { Text } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

function CondoLabel({text}) {
  return (
    <Text style={{color:COLORS.MainText, fontWeight:600, fontSize:SIZES.medium, marginBottom:SIZES.xSmall}}>{text}</Text>
  )
}

export default CondoLabel