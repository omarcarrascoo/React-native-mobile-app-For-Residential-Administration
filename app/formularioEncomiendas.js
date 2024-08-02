import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RowBackHeader from '../components/common/header/RowBackHeader'
import { COLORS, SIZES } from '../constants/theme'
import CondoInputText from '../components/common/form/CondoInputText'
import CondoDropdown from '../components/common/form/CondoDropDownInput'
import CondoTimeInput from '../components/common/form/CondoTImeInput'
import CondoBoxText from '../components/common/titles/CondoBoxText'

function ForumularioEncomiendas() {
  const router = useRouter()
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const handdleBack = () =>{
    router.push("/visitas")
  }
  const handdleNavigation = () =>{
    router.push("/qrEncomienda")
    
  }
  return (
    <SafeAreaView>
      
      <Stack.Screen
        options={{
            autoHideHomeIndicator:true,
            header:()=>(
              <RowBackHeader action={()=>handdleBack()} title={"Encomiendas"}/>
            )
        }} 
      />
      <View style={{paddingHorizontal:SIZES.large}}>
        <Text style={{fontSize:SIZES.medium}}>Ingresa los datos de tu encomienda para autorizar su entrada al condominio.</Text>
        <ScrollView style={{gap:15, marginTop:28}}>
          <CondoInputText label={"Emisor de encomienda"} placeholder={"Crab Eats"}/>
          <CondoInputText label={"Encomienda a nombre de"} placeholder={"00000000-0"}/>
          <CondoTimeInput/>
          <CondoBoxText label={"Instrucciones de entrega"}/>
          <TouchableOpacity onPress={()=>handdleNavigation()} style={{backgroundColor:COLORS.MainPurple, marginTop:SIZES.large, padding:12, borderRadius:10}}>
            <Text style={{textAlign:'center', color:COLORS.white, fontSize:SIZES.medium}}>Hacer Visita</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* <View style={{backgroundColor:COLORS.white, paddingVertical: SIZES.xLarge}}>
        <TouchableOpacity style={{backgroundColor:COLORS.MainPurple, marginHorizontal: SIZES.large, padding:12, borderRadius:10}}>
          <Text style={{textAlign:'center', color:COLORS.white, fontSize:SIZES.medium}}>Hacer Visita</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  )
}

export default ForumularioEncomiendas