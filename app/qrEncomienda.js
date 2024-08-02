import React from 'react'
import { Image, ScrollView, View } from 'react-native'
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
import images from '../constants/images'

function QrEncomienda() {
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
                <RowBackHeader action={()=>handdleBack()} title={"Notificación de encomienda"}/>
              )
          }} 
        />
      <ScrollView style={{paddingHorizontal:SIZES.large, marginBottom: 50}}>
          <QrVisitas encomienda={"true"}/>
          <View style={{marginTop:SIZES.large}}>
            <CondoSubTitle Title={"Detalles de la visita"}/>
            <CondoTimeInfo1/>
            <View style={{marginBottom:SIZES.medium}}>
              <CondoLabel text={"Emisor de encomienda"}/>
              <CondoText text={"John Doe"}/>
            </View>
            <View style={{marginBottom:SIZES.medium}}>
              <CondoLabel text={"Encomienda a nombre de"}/>
              <CondoText text={"503+ 00000000"}/>
            </View>
            <View style={{marginBottom:SIZES.medium}}>
              <CondoLabel text={"Instrucciones de entrega"}/>
              <CondoText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}/>
            </View>
            <View style={{marginBottom:SIZES.medium}}>
              <CondoLabel text={"Evidencia de entrega"}/>
              <Image style={{width:"100%", height:200, borderRadius:10}} source={images.testEvidence}/>
            </View>
          </View>
      </ScrollView>
      <View style={{backgroundColor: COLORS.white, position:"absolute", width:"100%", bottom:0}}>
        <View style={{paddingHorizontal:SIZES.large, paddingVertical:SIZES.large}}>
          <CondoMainBtn action={()=>{
            router.push({
              pathname:'/formularioEncomiendas',
              params:{visita:"true"}
          })
          }} text={"Editar"}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default QrEncomienda