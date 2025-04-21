import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import images from '../constants/images';
import { Stack } from 'expo-router';
import MainHeader from '../components/common/header/MainHeader';
import MainFooter from '../components/common/footer/MainFooter';
import PaymentLister from '../components/paymentLister/PaymentLister';
import { getUserPayments } from '../redux/payments.redux';


function Banca() {

  const [payments, setPayment] = useState([]);

  const fetchUserPayments = async () => {
    try {
      const data = await getUserPayments(4386661000004923011);
      setPayment(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      setPayment([]);
    }
  };

  useEffect(() => {
    fetchUserPayments();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkWhite }}>
      <Stack.Screen
        options={{
          autoHideHomeIndicator:true,
          header: () =>(
            <MainHeader/>
          )
        }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.informationSection}>
          <ImageBackground imageStyle={{borderRadius: 10,}} source={images.bgWaveStyleCard} style={styles.accountCard}>
            <Text style={{color:COLORS.white, fontSize:SIZES.medium, marginBottom: 10}}>Estado de cuenta del mes</Text>
            <Text style={{color:COLORS.white, fontSize:SIZES.medium, fontWeight:800}}>${payments[0]?.Estado_Cuenta}</Text>
          </ImageBackground>
          <View style={styles.accountCard2}>
            <View>
              <Text style={{color:COLORS.MainPurple, fontSize:SIZES.small, marginBottom:4}}>Proximo Cobro</Text>
              <Text style={{color:COLORS.MainPurple, fontSize:SIZES.medium, fontWeight:700}}>{payments[0]?.Fecha_Proximo_Pago}</Text>
            </View>
            <Text style={{color:COLORS.MainPurple, fontSize:SIZES.medium}}>${payments[0]?.Monto_Proximo_Pago}</Text>
          </View>
        </View>
        <View style={{padding:SIZES.large}}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom: SIZES.large}}>
            <Text style={styles.subtitle}>Tus pagos pasados</Text>
            <TouchableOpacity>
              <Text style={{color:COLORS.MainPurple}}>Ver Historial</Text>
            </TouchableOpacity>
          </View>
          <PaymentLister/>
        </View>
      </View>
      <MainFooter style={styles.footer}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  informationSection:{
    padding:SIZES.large,
    gap:18
  },
  accountCard:{
    minHeight:100,
    paddingHorizontal: SIZES.medium,
    justifyContent:'center'
  },
  accountCard2:{
    minHeight:80,
    paddingHorizontal: SIZES.medium,
    justifyContent: 'space-between',
    alignItems:"center",
    flexDirection: 'row',
    backgroundColor: COLORS.tillBlue,
    borderRadius: 10
  },
  subtitle:{
      fontSize:18,
      color:COLORS.MainText,
  },
  contentContainer: {
    flex: 1, // Occupy all available space
    justifyContent: 'flex-end', // Push content to the bottom
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    // ... other footer styles
  },

})
export default Banca