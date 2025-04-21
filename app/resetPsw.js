import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RowBackHeader from '../components/common/header/RowBackHeader'
import { Text, TouchableOpacity, View } from 'react-native'
import CondoInputText from '../components/common/form/CondoInputText'
import { COLORS, SIZES } from '../constants/theme'
import CondoMainBtn from '../components/common/buttons/CondoMainBtn'

function resetPsw() {
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
            <RowBackHeader action={() => handleBack()} title={"Cambiar contraseña"} />
          )
        }} 
      />
      <View style={{paddingHorizontal: SIZES.large}}>
        <CondoInputText placeholder={"**************"} label={"Contraseña actual"}/>
        <CondoInputText placeholder={"**************"} label={"Nueva contraseña"}/>
        <View style={{marginTop:SIZES.xLarge * 1.5}}>
            <CondoMainBtn text={"Guardar"}/>
        </View>
        <TouchableOpacity>
          <Text style={{color:COLORS.MainPurple, textDecorationColor:COLORS.MainPurple, textDecorationLine:"underline", textAlign:"center", marginTop:30}}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default resetPsw