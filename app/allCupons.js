import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainHeader from '../components/common/header/MainHeader'
import { SIZES } from '../constants/theme'
import GeneralFilter from '../components/common/filters/GeneralFilter'
import MainSearchBar from '../components/common/searchBars/MainSearchBar'
import CuponesLister from '../components/cuponesLister/CuponesLister'
import RowBackHeader from '../components/common/header/RowBackHeader'

function allCupons() {
  const router = useRouter()
    const orderByFullOptions = [
        {title: "Más recientes", slug:"mas-recientes"},
        {title: "Más antiguos", slug:"mas-antiguos"},
        {title: "Más próximos a expirar", slug:"mas-proximos"},
        {title: "Más lejanos a expirar", slug:"mas-lejanos"},
      ]
      const filterFullOptions = [
        {title: "Ver todo", slug:"ver-todo"},
        {title: "Restaurantes", slug:"proximas"},
        {title: "Tiendas", slug:"pasadas"},
        {title: "Mercados", slug:"canceladas"},
      ]
  return (
    <SafeAreaView>
        <Stack.Screen
        options={{
          autoHideHomeIndicator:true,
          header: () =>(
            <RowBackHeader action={()=>router.push("/cupones")} title={"Todos los cupones"}/>
          )
        }}
      />
      <View>
      <View style={{paddingHorizontal:SIZES.large, marginBottom:SIZES.large}}>
        <MainSearchBar filterFullOptions={filterFullOptions} orderByFullOptions={orderByFullOptions}/></View>
        <GeneralFilter filterFullOptions={filterFullOptions} orderByFullOptions={orderByFullOptions}/>
        <View style={{paddingHorizontal: SIZES.large}}>
            <CuponesLister/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default allCupons