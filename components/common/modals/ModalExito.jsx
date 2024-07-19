import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import icons from '../../../constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack, useRouter } from 'expo-router'
import RowBackHeader from '../header/RowBackHeader'
import PurpleLineHeader from '../header/PurpleLineHeader'
import { COLORS, ScreenHeigh, SIZES } from '../../../constants/theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const ModalExito = ({title, message}) => {
    const router = useRouter();
  return (
    <SafeAreaView style={{height:ScreenHeigh * .80, justifyContent:'center'}}>
        <Stack.Screen
            options={{
                autoHideHomeIndicator: true,
                header: () => (
                    <PurpleLineHeader action={()=>handleNavigation()}/>
                    )
            }}
        />
        <View style={{alignItems:'center'}}>
            <Image style={{width:200, height:200}} source={icons.exito}/>
        </View>
        <Text style={{paddingTop:SIZES.large,fontSize:SIZES.large, color:COLORS.MainText, textAlign:"center"}}>{title}</Text>
        <Text style={{padding:SIZES.large, fontSize:SIZES.medium, color:COLORS.MainText, textAlign:"center"}}>{message}</Text>
        <View style={{paddingHorizontal:SIZES.large}}>
            <TouchableOpacity onPress={()=>router.push("/reservation")} style={{padding:SIZES.medium, borderWidth:1, borderRadius:10, alignItems:'center', backgroundColor:COLORS.MainPurple, marginBottom:SIZES.large, borderColor: COLORS.MainPurple}}>
                <Text style={{color:COLORS.white, fontSize: SIZES.medium}}>Ver detalles de reserva</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.push("/home")} style={{padding:SIZES.medium, borderWidth:1, borderRadius:10, alignItems:'center', marginBottom:SIZES.large, borderColor: COLORS.MainPurple}}>
                <Text style={{color:COLORS.MainPurple, fontSize: SIZES.medium}}>Regresar a Inicio</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    
  )
}

export default ModalExito;