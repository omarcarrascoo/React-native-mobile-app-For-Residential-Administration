import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RowBackHeader from '../components/common/header/RowBackHeader'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CondoInputText from '../components/common/form/CondoInputText'
import { COLORS, SIZES } from '../constants/theme'
import CondoMainBtn from '../components/common/buttons/CondoMainBtn'
import CondoSubTitle from '../components/common/titles/CondoSubTitle'
import CondoText from '../components/common/titles/CondoText'

function interfaz() {
    const [active, setActive] = useState(1)
    const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return (
    <SafeAreaView>
        <Stack.Screen
        options={{
          autoHideHomeIndicator: true,
          header: () => (
            <RowBackHeader action={() => handleBack()} title={"Configuración de interfaz"} />
          )
        }} 
      />
      <View style={{paddingHorizontal: SIZES.large}}>
        <CondoSubTitle Title={"Apariencia"}/>
        <View style={styles.btnContainer}>
            <CondoText text={"Modo claro"}/>
            <TouchableOpacity onPress={()=>setActive(1)} style={styles.circle}>
                {active === 1&&<View style={styles.innerCircle}/>}
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <CondoText text={"Modo oscuro"}/>
            <TouchableOpacity onPress={()=>setActive(2)} style={styles.circle}>
                {active === 2&&<View style={styles.innerCircle}/>}
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <CondoText text={"Usar configuración de dispositivo"}/>
            <TouchableOpacity onPress={()=>setActive(3)} style={styles.circle}>
                {active === 3&&<View style={styles.innerCircle}/>}
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:SIZES.large
    },
    circle:{
        height: 20,
        width: 20,
        borderRadius:100,
        borderWidth:.5,
        borderColor:COLORS.gray,
        alignItems:'center',
        justifyContent:'center'
        
    },
    innerCircle:{
        height: 14,
        width: 14,
        borderRadius:100,
        borderWidth:.5,
        backgroundColor: COLORS.MainPurple
    }
})

export default interfaz