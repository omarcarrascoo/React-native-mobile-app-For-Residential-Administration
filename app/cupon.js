import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import RowBackHeader from '../components/common/header/RowBackHeader'
import { COLORS, ScreenHeigh, SIZES } from '../constants/theme'
import images from '../constants/images'
import Icon from 'react-native-vector-icons/FontAwesome';
import { getPromocionesAppById } from '../redux/promocionesRedux'
import { BASE_URL2 } from '../redux/requestMethods.redux'
import { getComercioById } from '../redux/comericiosRedux'
import { getTokenFromStorage } from '../redux/setToken.redux'


function Cupon({marked}) {
    const router = useRouter()
    const [saved, setSaved] = useState (marked)
    const [openCupon, setOpenCupon] = useState(false)
    const {id} = useLocalSearchParams(); 
    const [cuponesData, setCuponesData] = useState([])
    const [img, setImg] = useState("")



    const getImageCommerce = async (id) =>{
        const data = await getComercioById(id)
        setImg(data.Imagen_Comercio)

    }

    useEffect(async ()=>{
        const setCupons = async () =>{
          const data = await getPromocionesAppById(id)
          getImageCommerce(data.Comercios.ID)
          setCuponesData(data)
        }
        const setToken = async () =>{
            const data = await getTokenFromStorage()
            setHeaderToken(data)
        }
        
        
        setToken()
        await setCupons()
    },[])

  const [headerToken, setHeaderToken] = useState()

    
  return (
    <SafeAreaView style ={{height:ScreenHeigh, backgroundColor:COLORS.MainPurple,justifyContent:'center', marginTop: -ScreenHeigh * .10}}>
        <Stack.Screen
        options={{
          autoHideHomeIndicator:true,
          header: () =>(
            <RowBackHeader action={()=>router.push("/allCupons")} title={"Cupones"}/>
          )
        }}
        />
        <View style={{paddingHorizontal:SIZES.large, paddingTop:20}}>
            {openCupon === true?
            <ImageBackground style={{alignItems:"center"}} source={images.bgCupons}>
                <View style={{paddingHorizontal:SIZES.large, width:"100%", alignItems:"flex-end", paddingTop:SIZES.large}} onPress={()=>setSaved(!saved)}>
                    <TouchableOpacity style={{paddingHorizontal:SIZES.large, width:"100%", alignItems:"flex-end"}} onPress={()=>setSaved(!saved)}>
                        {saved===true?<Icon name="bookmark" size={34} color={COLORS.MainPurple}/>:<Icon name="bookmark-o" size={34} color={COLORS.gray}/>}
                    </TouchableOpacity>
                </View>
                <Image style={{width:280, height:280, marginTop:30}} source={images.qrtest}/>
                <View style={{flexDirection:'row', gap:14, alignItems:'center', marginTop:50, paddingBottom:50 }}>
                    <Image style={{width:70, height:70, marginTop:30}} source={{ uri: `${BASE_URL2}${img}`, headers: {Authorization: `Zoho-oauthtoken ${headerToken}`}}}/>
                    <View style={{gap:4, marginTop:40}}>
                        <Text style={{color:COLORS.alert, fontSize: SIZES.xLarge}}>20% de descuento</Text>
                        <Text style={{color:COLORS.MainText, fontSize: SIZES.medium}}>{cuponesData.Condicion_Promocion}</Text>
                        <Text style={{color:COLORS.gray, fontSize: SIZES.medium}}>Válido hasta {cuponesData.Fecha_Vencimiento}</Text>
                    </View>
                </View>
            </ImageBackground>
            :
            <ImageBackground style={{alignItems:"center"}} source={images.bgCupons}>
                <View style={{paddingHorizontal:SIZES.large, width:"100%", alignItems:"flex-end", paddingTop:SIZES.large}} onPress={()=>setSaved(!saved)}>
                    <TouchableOpacity style={{paddingHorizontal:SIZES.large, width:"100%", alignItems:"flex-end"}} onPress={()=>setSaved(!saved)}>
                        {saved===true?<Icon name="bookmark" size={34} color={COLORS.MainPurple}/>:<Icon name="bookmark-o" size={34} color={COLORS.gray}/>}
                    </TouchableOpacity>
                </View>
                <Image style={{width:150, height:150, marginTop:30}} source={{ uri: `${BASE_URL2}${img}`, headers: {Authorization: `Zoho-oauthtoken ${headerToken}`}}}/>
                <View style={{gap:20, marginTop:40}}>
                    <Text style={{color:COLORS.alert, fontSize: SIZES.xLarge}}>20% de descuento</Text>
                    <Text style={{color:COLORS.MainText, fontSize: SIZES.medium}}>{cuponesData.Condicion_Promocion}</Text>
                    <Text style={{color:COLORS.gray, fontSize: SIZES.medium}}>Válido hasta {cuponesData.Fecha_Vencimiento}</Text>
                </View>
                <View style={{gap:20, marginVertical:40, width:"100%", paddingHorizontal:SIZES.large}}>
                    <TouchableOpacity onPress={()=>setOpenCupon(true)} style={{borderRadius:8, backgroundColor:COLORS.MainPurple, padding:12, width:"100%", alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:COLORS.white, fontSize:SIZES.medium}}>Redimir Ahora</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>    
        }
        </View>
    </SafeAreaView>
  )
}

export default Cupon