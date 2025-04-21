import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import images from '../../../../constants/images'
import { COLORS, SIZES } from '../../../../constants/theme'
import { useRouter } from 'expo-router'
import { getTokenFromStorage } from '../../../../redux/setToken.redux'
import { BASE_URL2 } from '../../../../redux/requestMethods.redux'

function AmenidadesCard({amenidad}) {
    const router = useRouter();

    const [headerToken, setHeaderToken] = useState()

    
    useEffect(()=>{
        const setToken = async () =>{
            const data = await getTokenFromStorage()
            setHeaderToken(data)
        }
        setToken()
    },[])



  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: `${BASE_URL2}${amenidad.Imagen_Amenidad}`, headers: {Authorization: `Zoho-oauthtoken ${headerToken}`}}}/>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{amenidad.Titulo_Amenidad}</Text>
            <Text style={styles.parr}>{amenidad.Descripcion_Amenidad}.</Text>
            <View style={{flexDirection:'row', gap:60}}>
                <View >
                    <Text style={styles.subtitle} >Horarios</Text>
                    <Text style={{color:COLORS.alert}}>Lunes - Viernes</Text>
                    <Text style={{color:COLORS.SecondText}}>{amenidad.Horarios_Amenidad}</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Capacidad</Text>
                    <Text style={{maxWidth:120, color:COLORS.SecondText}}>Grupos de hasta {amenidad.Capacidad} personas</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>{router.push(`/bookAmenity?id=${amenidad.ID}`)}}>
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