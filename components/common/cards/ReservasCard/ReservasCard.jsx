import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import images from '../../../../constants/images';
import icons from '../../../../constants/icons';
import { COLORS, SIZES } from '../../../../constants/theme';
import { useRouter } from 'expo-router';

function ReservasCard() {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/reservation`);
  };

  return (
    <View style={styles.card}>
        <View style={styles.top}>
            <Image source={images.test1} style={{width:150, height:100}}/>
            <View>
               <Text style={styles.title}>Rooftop</Text>
               <View style={styles.icontext}><Image style={{width:20, height:22}} source={icons.calendar}/><Text style={styles.parr}>Lunes 13 de Mayo</Text></View>
               <View style={styles.icontext}><Image style={styles.icon} source={icons.clock}/><Text style={styles.parr}>1:00 PM - 6:00 PM</Text></View>
            </View>
        </View>
        <TouchableOpacity onPress={handlePress} style={styles.btn}><Text style={{color:COLORS.MainPurple}}>Ver Detalles</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:COLORS.white,
    padding:14,
    borderRadius:10,
    marginBottom:SIZES.xLarge
  },
  top:{
    flexDirection:'row',
    alignItems: 'center',
    gap:20,
  },
  title:{
    fontSize:SIZES.large,
    color: COLORS.SecondText,
    marginBottom: SIZES.small
  },
  icontext:{
    flexDirection:'row',
    gap: 5,
    alignItems: 'center',
    marginBottom:SIZES.small
  },
  icon:{
    width:20,
    height:20
  },
  parr:{
    color:COLORS.gray2
  },
  btn:{
    borderColor:COLORS.MainPurple,
    borderRadius: 3,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    padding:9,
    marginTop:SIZES.medium
  }
});

export default ReservasCard;
