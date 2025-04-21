import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RowBackHeader from '../components/common/header/RowBackHeader'
import { View } from 'react-native'
import CondoInputText from '../components/common/form/CondoInputText'
import { SIZES } from '../constants/theme'
import CondoMainBtn from '../components/common/buttons/CondoMainBtn'

function contactInfo() {
    const router = useRouter()
  const handleBack = () => {
    router.back("/userProfile")
  }
  return (
    <SafeAreaView>
        <Stack.Screen
        options={{
          autoHideHomeIndicator: true,
          header: () => (
            <RowBackHeader action={() => handleBack()} title={"Información de contacto"} />
          )
        }} 
      />
      <View style={{paddingHorizontal: SIZES.large}}>
        <CondoInputText label={"Correo electrónico"}/>
        <CondoInputText label={"Número de teléfono"}/>
        <View style={{marginTop:SIZES.xLarge * 1.5}}>
            <CondoMainBtn text={"Guardar"}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default contactInfo