import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import images from '../../../../constants/images'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES } from '../../../../constants/theme'
import { useRouter } from 'expo-router';
import { getTokenFromStorage } from '../../../../redux/setToken.redux';
import { BASE_URL, BASE_URL2 } from '../../../../redux/requestMethods.redux';

function CuponCard({item, id, Imagen_Comercio, bgColor,  marked, comercio, Descripcion_Promocion, Fecha_Vencimiento}) {
    const router = useRouter()
    const [saved, setSaved] = useState (marked)
    const [headerToken, setHeaderToken] = useState()

    
    useEffect(()=>{
        const setToken = async () =>{
            const data = await getTokenFromStorage()
            setHeaderToken(data)
        }
        setToken()
    },[])  
    
  return (
    <TouchableOpacity onPress={()=>{router.push(`/cupon?id=${id}`)}} style={[styles.card, {backgroundColor:bgColor}]}>
        <View style={{flexDirection:"row", gap:6}}>
            <Image style={{width:65, height:65}} source={{ uri: `${BASE_URL2}${Imagen_Comercio}`, headers: {Authorization: `Zoho-oauthtoken ${headerToken}`}}}/>
            <View style={{maxWidth:"80%"}}>
                <Text style={{color:COLORS.MainText, fontSize:SIZES.medium, fontWeight:600}}>{Descripcion_Promocion}</Text>
                <Text style={{color:COLORS.MainText, marginTop:10, fontSize:13}}>{comercio}</Text>
                <Text style={{color:COLORS.gray2, fontSize:13}}>Válido hasta {Fecha_Vencimiento}</Text>
            </View>
        </View>
        <TouchableOpacity style={{height:"100%", paddingTop:SIZES.small}} onPress={()=>setSaved(!saved)}>
            {saved===true?<Icon name="bookmark" size={24} color={COLORS.MainPurple}/>:<Icon name="bookmark-o" size={24} color={COLORS.gray}/>}
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
       flexDirection:'row',
       height: SIZES.xxLarge *3,
       alignItems:'center',
       paddingHorizontal:10,
       width:"100%",
       justifyContent:"space-between"
    }
})

export default CuponCard