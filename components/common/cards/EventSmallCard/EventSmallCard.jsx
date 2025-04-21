import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../../constants/theme'
import images from '../../../../constants/images'

function EventSmallCard({event}) {
  return (
    <ImageBackground imageStyle={{borderRadius: 10,}} source={images.smCardBg} style={styles.card}>
        <Text style={{color:COLORS.lightWhite}}>{event.Titulo_Evento}</Text>
        <Text style={{color:COLORS.lightWhite}}>{event.Hora_Evento}</Text>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:COLORS.MainPurple,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 14,
        paddingLeft: 18,
        paddingRight: 10,
        borderRadius: 10,
        marginVertical: 3,
    }
})

export default EventSmallCard