import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'

function CondoMainBtn({text, action, outline}) {
  return (
    <TouchableOpacity onPress={action} style={outline === true? styles.outlineBtn : styles.btn}>
        <Text   style={outline === true? styles.outlineText : styles.text }>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btn:{backgroundColor:COLORS.MainPurple,padding:12, borderRadius:10, alignItems:"center", justifyContent:"center"},
  outlineBtn: {borderColor:COLORS.MainPurple, borderWidth:.5,padding:12, borderRadius:10, alignItems:"center", justifyContent:"center"},
  text:{color:COLORS.white, fontSize:SIZES.medium},
  outlineText:{color:COLORS.MainPurple, fontSize:SIZES.small}
})
export default CondoMainBtn