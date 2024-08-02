import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../../../../constants/theme'
import CondoSubTitle from '../../titles/CondoSubTitle'
import CondoText from '../../titles/CondoText'

function CalendarCard() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <Text style={{color:COLORS.gray3, fontSize:SIZES.small}}>Lunes 02</Text>
            <Text style={{color:COLORS.gray3, fontSize:SIZES.small}}>00:00 - 00:00</Text>
        </View>
        <Text style={{color:COLORS.MainText, marginVertical:6, fontSize:SIZES.medium}}>Juan Picon</Text>

        <Text style={{color:COLORS.gray3, fontSize:SIZES.small}}>Lorem ipsum dolor sit amet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:SIZES.large,
        backgroundColor:COLORS.tillPurple,
        marginBottom:SIZES.medium,
        borderRadius: 10
    }
})


export default CalendarCard