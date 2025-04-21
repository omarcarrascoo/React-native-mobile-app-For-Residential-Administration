import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../../../../constants/theme'
import images from '../../../../constants/images'

function PaymentSmallCard({paymentData}) {
  return (
    <ImageBackground imageStyle={{borderRadius: 10,}} source={images.smCardBg} style={styles.card}>
        <View>
            <Text style={{color:COLORS.lightWhite, fontSize:SIZES.small,marginBottom: 5}}>{paymentData.display_value}</Text>
            <Text style={{color:COLORS.alert, fontSize: SIZES.small }}>$300.00</Text>
        </View>
        <Text style={{color:COLORS.alert, fontSize: SIZES.small}}>Viernes, 28 de junio</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:COLORS.MainPurple,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        paddingLeft: 18,
        paddingRight: 10,
        borderRadius: 10,
        marginVertical: 4,
    }
})

export default PaymentSmallCard