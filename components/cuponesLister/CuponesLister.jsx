import React from 'react'
import { ScrollView, View } from 'react-native'
import CuponCard from '../common/cards/cuponCard/CuponCard'
import { COLORS } from '../../constants/theme'

function CuponesLister({styles, mark}) {
  return (
    <ScrollView style ={styles}>
    <View style={{ gap: 10, paddingBottom:20}}>
        <CuponCard marked={mark} bgColor={COLORS.white}/>
        <CuponCard marked={mark} bgColor={COLORS.white}/>
        <CuponCard marked={mark} bgColor={COLORS.white}/>
        <CuponCard marked={mark} bgColor={COLORS.white}/>
        <CuponCard marked={mark} bgColor={COLORS.white}/>
        <CuponCard marked={mark} bgColor={COLORS.white}/>
    </View>
    </ScrollView>
    
  )
}

export default CuponesLister