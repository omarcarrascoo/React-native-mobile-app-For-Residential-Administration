import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RowBackHeader from '../components/common/header/RowBackHeader'
import { COLORS, SIZES } from '../constants/theme'
import CondoInputText from '../components/common/form/CondoInputText'
import CondoDropdown from '../components/common/form/CondoDropDownInput'
import CondoTimeInput from '../components/common/form/CondoTImeInput'
import ModalExito from '../components/common/modals/ModalExito'

function formularioVisitas() {
  const router = useRouter()
  const [modal, setModal] = useState(false)

  const params = useLocalSearchParams();
  const{visita} = params
  console.log(visita);
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const handdleBack = () =>{
    router.push("/visitas")
  }
  const handleReservation = () =>{
    // setModal(true)
    router.push("/qrVisita")
}
  if (modal===true) {
    return(
      <ModalExito
        title={"QR GENERADO"}
        message={"Su Qr ha sido generado de manera satisfactoria"}
      />
    )
  } else {
    return (
      <SafeAreaView>
        <Stack.Screen
          options={{
              autoHideHomeIndicator:true,
              header:()=>(
                <RowBackHeader action={()=>handdleBack()} title={"QR para nueva visita"}/>
              )
          }} 
        />
        
        <View style={{paddingHorizontal:SIZES.large}}>
          <Text style={{fontSize:SIZES.medium}}>Ingresa los datos de tu visita para autorizar su entrada al condominio.</Text>
          <ScrollView style={{gap:15, marginTop:28}}>
            {visita === "true"?
                  <>
                    <Text style={{fontWeight:700, fontSize:SIZES.medium, color:COLORS.MainText, marginBottom:SIZES.xSmall}}>Nombre</Text>
                    <Text style={styles.parr}>John Doe</Text>
                    <Text style={{fontWeight:700, fontSize:SIZES.medium, color:COLORS.MainText, marginBottom:SIZES.xSmall}}>Número de teléfono</Text>
                    <Text style={styles.parr}>503+ 00000000</Text>
                    <Text style={{fontWeight:700, fontSize:SIZES.medium, color:COLORS.MainText, marginBottom:SIZES.xSmall}}>Identificación</Text>
                    <Text style={styles.parr}>00000000-0</Text>
                  </>
                  :
                <>
                  <CondoInputText label={"Nombre"} placeholder={"Bruno Ortega"}/>
                  <CondoInputText label={"Identificación (DUI)"} placeholder={"00000000-0"}/>
                  <CondoInputText label={"Número de teléfono"} placeholder={"503+ 0000 0000"}/>  
                </>

            }
            <CondoDropdown label={"Motivo de Visita"} options={options}/>
            <CondoTimeInput/>
            <TouchableOpacity onPress={()=>handleReservation()}  style={{backgroundColor:COLORS.MainPurple, marginTop:SIZES.large, padding:12, borderRadius:10}}>
              <Text style={{textAlign:'center', color:COLORS.white, fontSize:SIZES.medium}}>Hacer Visita</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* <View style={{backgroundColor:COLORS.white, paddingVertical: SIZES.xLarge}}>
          <TouchableOpacity style={{backgroundColor:COLORS.MainPurple, marginHorizontal: SIZES.large, padding:12, borderRadius:10}}>
            <Text style={{textAlign:'center', color:COLORS.white, fontSize:SIZES.medium}}>Hacer Visita</Text>
          </TouchableOpacity>
        </View> */}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  label:{
    fontSize: SIZES.medium,
    marginBottom: 8,
    color:COLORS.MainText,
    fontWeight: 700

  },
  parr:{
    fontSize: SIZES.medium,
    marginBottom: SIZES.xxLarge,
    color:COLORS.MainText,
    fontWeight: 600
  }
})

export default formularioVisitas