import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants/theme'
import {  Stack, useRouter } from 'expo-router'
import RowBackHeader from '../components/common/header/RowBackHeader'
import QrVisitas from '../components/qrVisitar/QrVisitas'
import CondoSubTitle from '../components/common/titles/CondoSubTitle'
import CondoTimeInfo1 from '../components/condoTimeInfo1/CondoTimeInfo1'
import CondoLabel from '../components/common/titles/CondoLabel'
import CondoText from '../components/common/titles/CondoText'
import CondoMainBtn from '../components/common/buttons/CondoMainBtn'

function QrVisita() {
  const router = useRouter()
  const handdleBack = ()=>{
    router.push("/visitas")
  }
  return (
    <SafeAreaView>
       <Stack.Screen
          options={{
              autoHideHomeIndicator:true,
              header:()=>(
                <RowBackHeader action={()=>handdleBack()} title={"QR para nueva visita"}/>
              )
          }} 
        />
      <ScrollView style={{paddingHorizontal:SIZES.large, marginBottom: 50}}>
          <QrVisitas/>
          <View style={{marginTop:SIZES.large}}>
            <CondoSubTitle Title={"Detalles de la visita"}/>
            <CondoTimeInfo1/>
            <View style={{marginBottom:SIZES.medium}}>
              <CondoLabel text={"Nombre"}/>
              <CondoText text={"John Doe"}/>
            </View>
            <View style={{marginBottom:SIZES.medium}}>
              <CondoLabel text={"Motivo de visita"}/>
              <CondoText text={"Motivo de visita"}/>
            </View>
            <View style={{marginBottom:SIZES.medium}}>
              <CondoLabel text={"Número de teléfono"}/>
              <CondoText text={"503+ 00000000"}/>
            </View>
            <View style={{marginBottom:SIZES.medium}}>
              <CondoLabel text={"Identificación"}/>
              <CondoText text={"00000000-0"}/>
            </View>
          </View>
      </ScrollView>
      <View style={{backgroundColor: COLORS.white, position:"absolute", width:"100%", bottom:0}}>
        <View style={{paddingHorizontal:SIZES.large, paddingVertical:SIZES.large}}>
          <CondoMainBtn action={()=>{
            router.push({
              pathname:'/formularioVisitas',
              params:{visita:"true"}
          })
          }} text={"Editar"}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default QrVisita