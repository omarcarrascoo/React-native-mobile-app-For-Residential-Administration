import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import PaymentSmallCard from '../common/cards/PaymentSmallCard/PaymentSmallCard'
import { getUserPayments } from '../../redux/payments.redux';

function PaymentLister() {
  const [payments, setPayment] = useState([]);

  const fetchUserPayments = async () => {
    try {
      const data = await getUserPayments(4386661000004923011);
      setPayment(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      setAmenidades([]);
    }
  };

  useEffect(() => {
    fetchUserPayments();
  }, []);
  return (
    <View style={styles.container}>
        <ScrollView style={{minHeight:SIZES.xxLarge*14}}>
          {payments[1]?.Historial_Pagos?.map((item, index)=>(
            <PaymentSmallCard key={index} paymentData={item}/>
          ))}
            
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