import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import images from '../../../../constants/images'
import { COLORS, SIZES } from '../../../../constants/theme'
import { useRouter } from 'expo-router'

function AmenidadesCard() {
    const router = useRouter();
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={images.test1}/>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Nombre de la amenidad</Text>
            <Text style={styles.parr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut.</Text>
            <View style={{flexDirection:'row', gap:60}}>
                <View >
                    <Text style={styles.subtitle} >Horarios</Text>
                    <Text style={{color:COLORS.SecondText}}>Lunes - Viernes</Text>
                    <Text style={{color:COLORS.SecondText}}>8:00 am - 12 pm</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Capacidad</Text>
                    <Text style={{maxWidth:120, color:COLORS.SecondText}}>Grupos de hasta 20 personas</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>{router.push('/bookAmenity')}}>
                <Text style={{color:COLORS.white, fontSize:SIZES.medium}}>Reservar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        borderRadius: 10,
        minHeight: 180,
        maxHeight: 180
    },
    container: {
        width: 320,
        marginRight:15
    },
    textContainer:{
        maxWidth:"100%"
    },
    title:{
        fontSize: SIZES.xLarge,
        color: COLORS.MainText,
        marginTop:20
    },
    subtitle:{
        color: COLORS.gray,
        marginBottom: SIZES.medium
    },
    parr:{
        color: COLORS.SecondText,
        marginVertical: SIZES.small,
        fontSize:SIZES.medium
    },
    btn:{
        backgroundColor: COLORS.MainPurple,
        alignItems:'center',
        justifyContent:'center',
        padding:14,
        borderRadius:10,
        marginTop: 38,
        marginBottom:22
    }


})

export default AmenidadesCard