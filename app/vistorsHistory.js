import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import RowBackHeader from '../components/common/header/RowBackHeader'
import Lister from '../components/previousVisitorsLister/previousVisitorsLister'
import GeneralFilter from '../components/common/filters/GeneralFilter'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES } from '../constants/theme'
import HistorialVisitaCard from '../components/common/cards/historialVisitaCard/HistorialVisitaCard'

function VisitorHistory() {
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
            <GeneralFilter/>
            <Text style={{paddingVertical:SIZES.large}}>Selecciona una visita previa</Text>
            <ScrollView style={{marginBottom:200}}>
              <Lister child={<HistorialVisitaCard action={()=>{router.push("/qrEncomienda")}}/>}/>   
            </ScrollView>      
        </View>
    </SafeAreaView>
  )
}

export default VisitorHistory