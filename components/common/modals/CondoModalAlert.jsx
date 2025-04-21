import React from 'react'
import { Text, View } from 'react-native'
import CondoText from '../titles/CondoText'
import CondoMainBtn from '../buttons/CondoMainBtn'
import { COLORS, ScreenHeigh, ScreenWidth, SIZES } from '../../../constants/theme'
import { useRouter } from 'expo-router'

function CondoModalAlert({action1, action2}) {
  return (
        <View style={{
            position: "absolute",
            marginTop: ScreenHeigh / 3,
            backgroundColor: 'rgb(217,217,217)',
            borderRadius: 20,
            paddingTop: 20,
            zIndex:100,
            backgroundColor:COLORS.alert2,
            right:20
        }}>
            <View style={{backgroundColor:COLORS.white, width:"100%", minHeight:280, paddingBottom:20, alignItems:'center', justifyContent:'center', paddingHorizontal:SIZES.xLarge, borderBottomLeftRadius:10, borderBottomRightRadius:10 }}>
                <Text style={{fontSize:SIZES.large, color:COLORS.alert2}}>Cerrar sesión</Text>
                <CondoText text={"Estás a punto de cerrar sesión."}/>

                <CondoText text={"¿Estás seguro de que deseas continuar?"}/>
                <View style={{width:"100%", gap:15, marginTop: 30}}>
                    <CondoMainBtn action={action1} alert={true} text={"Cerrar sesión"}/>
                    <CondoMainBtn action={action2} outline={true} text={"Cancelar"}/>
                </View>
            </View>
        </View>
  )
}

export default CondoModalAlert