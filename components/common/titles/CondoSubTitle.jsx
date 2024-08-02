import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

function CondoSubTitle({Title}) {
    // if (!Title) {
    //     setText("Subtitle")
    // }
  return (
    <Text style={{fontSize:SIZES.large, color: COLORS.MainText, fontWeight:400, marginVertical:SIZES.medium }}>{Title}</Text>
  )
}
const styles = StyleSheet.create({
    title:{

    }
})

export default CondoSubTitle