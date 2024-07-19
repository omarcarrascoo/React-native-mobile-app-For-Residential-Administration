import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { COLORS } from '../../constants/theme'
import PaymentSmallCard from '../common/cards/PaymentSmallCard/PaymentSmallCard'

function PaymentLister() {
  return (
    <View style={styles.container}>
        <ScrollView>
            <PaymentSmallCard/>
            <PaymentSmallCard/>
            <PaymentSmallCard/>
            <PaymentSmallCard/>
            <PaymentSmallCard/>
            <PaymentSmallCard/>
        </ScrollView>
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
      maxHeight: 250,
      backgroundColor: COLORS.white,
      padding: 15,
      borderRadius: 10,
      shadowRadius: 5
    }
})


export default PaymentLister