import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import RowBackHeader from '../components/common/header/RowBackHeader'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants/theme';
import Calendar from '../components/calendar/Calendar';

function calendario() {
  const router = useRouter()

  const handdleBack = () =>{
    router.push("/home")
  }
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          autoHideHomeIndicator:true,
          header:()=>(
            <RowBackHeader action={()=>handdleBack()} title={"Calendario"}/>
          )
        }}
      />
      <Calendar/>
    </SafeAreaView>
  )
}

export default calendario