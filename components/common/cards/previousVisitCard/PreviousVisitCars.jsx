import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../../../../constants/theme'
import { useRouter } from 'expo-router'

function PreviousVisitCards() {
    const router = useRouter()

    const handdleNavigation = () =>{
        router.push({
            pathname:'/formularioVisitas',
            params:{visita:"true"}
        })
    }
  return (
    <TouchableOpacity onPress={()=>handdleNavigation()} style={{paddingVertical:30, borderTopWidth: 0, borderBottomWidth:.3}}>
        <Text style={{color:COLORS.MainText, fontWeight:700, marginBottom:SIZES.medium}}>Ana Membreño</Text>
        <Text>+503 0000 0000</Text>
    </TouchableOpacity>
  )
}

export default PreviousVisitCards