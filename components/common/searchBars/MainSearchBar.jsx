import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../constants/theme'
import  Icon  from 'react-native-vector-icons/FontAwesome'

function MainSearchBar() {
  return (
    <View style={{flexDirection:'row', alignItems:"center", backgroundColor:"#fff", padding:12, gap: 10, borderRadius:10}}>
        <Icon name='search' color={COLORS.gray} size={20}/>
        <Text style={{color:COLORS.gray}}>Buscar...</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    searchBar:{
        borderRadius: COLORS.MainText
    }
})

export default MainSearchBar