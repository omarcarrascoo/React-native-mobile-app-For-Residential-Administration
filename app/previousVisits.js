import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RowBackHeader from '../components/common/header/RowBackHeader'
import CondoInputText from '../components/common/form/CondoInputText'
import { SearchBar } from 'react-native-screens'
import MainSearchBar from '../components/common/searchBars/MainSearchBar'
import { SIZES } from '../constants/theme'
import Lister from '../components/previousVisitorsLister/previousVisitorsLister'
import PreviousVisitCards from '../components/common/cards/previousVisitCard/PreviousVisitCars'

function previousVisits() {
    const router = useRouter()

    const handdleBack = () =>{
        router.push("/visitas")
      }
  return (
    <SafeAreaView>
        <Stack.Screen
          options={{
              autoHideHomeIndicator:true,
              header:()=>(
                <RowBackHeader action={()=>handdleBack()} title={"Qr para visita previa"}/>
              )
          }} 
        />
        <View style={{paddingHorizontal:SIZES.large}} >
            <MainSearchBar/>
              <Text style={{paddingVertical:SIZES.large}}>Selecciona una visita previa</Text>
              <Lister child={<PreviousVisitCards/>}/>         
        </View>
    </SafeAreaView>
  )
}

export default previousVisits