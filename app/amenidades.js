import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { Stack, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import MainHeader from '../components/common/header/MainHeader';
import MainFooter from '../components/common/footer/MainFooter';
import AmenidadesLister from '../components/amenidadesLister/AmenidadesLister';
import ReservationLister from '../components/ReservationLister/ReservationLister';
import GeneralFilter from '../components/common/filters/GeneralFilter';
function Amenidades() {
  const orderByFullOptions = [
    {title: "Más recientes", slug:"mas-recientes"},
    {title: "Más antiguos", slug:"mas-antiguos"},
    {title: "Más próximos a expirar", slug:"mas-proximos"},
    {title: "Más lejanos a expirar", slug:"mas-lejanos"},
  ]
  const filterFullOptions = [
    {title: "Ver todo", slug:"ver-todo"},
    {title: "Próximas", slug:"proximas"},
    {title: "Pasadas", slug:"pasadas"},
    {title: "Canceladas", slug:"canceladas"},
  ]
  const params = useLocalSearchParams();
  const{reservation} = params
  const [menuAmenidades, setMenuAmenidades] = useState(reservation === "true"?true:false)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkWhite }}>
            <Stack.Screen
                options={{
                    autoHideHomeIndicator:true,
                    header: () =>(
                        <MainHeader/>
                    )
                }}
            />
            <View style={styles.container}>
              <View style={styles.menu}>
                  {menuAmenidades === false?
                  <>
                  <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setMenuAmenidades(false)}>
                    <View style={{width:8, height:8, backgroundColor:COLORS.MainPurple, borderRadius:100, marginBottom:10}}></View>
                    <Text style={{color:COLORS.MainPurple, fontWeight:600, fontSize:SIZES.medium}}>Amenidades</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={()=>setMenuAmenidades(true)}>
                    <Text style={{color:COLORS.gray, fontWeight:400, fontSize:SIZES.medium}}>Reservas</Text>
                  </TouchableOpacity>
                  </>
                  :
                  <>
                    <TouchableOpacity style={{alignItems:'center'}}  onPress={()=>setMenuAmenidades(false)}>
                      <Text style={{color:COLORS.gray, fontWeight:400, fontSize:SIZES.medium}}>Amenidades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center'}}  onPress={()=>setMenuAmenidades(true)}>
                    <View style={{width:8, height:8, backgroundColor:COLORS.MainPurple, borderRadius:100, marginBottom:10}}></View>
                      <Text style={{color:COLORS.MainPurple, fontWeight:600, fontSize:SIZES.medium}}>Reservas</Text>
                    </TouchableOpacity>
                  </>}
              </View>
              
              {menuAmenidades === false?<></>:<GeneralFilter filterFullOptions={filterFullOptions} orderByFullOptions={orderByFullOptions}/>}
              
                {menuAmenidades === false?
                <View style={{paddingLeft:20}}>
                  <AmenidadesLister/>
                </View>
                  : 
                <View style={{paddingHorizontal:SIZES.large}}>
                  <ReservationLister/>
                </View>
                }
                <MainFooter/>
            </View>
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  menu:{
    paddingHorizontal:SIZES.xxLarge,
    flexDirection: 'row',
    gap:20,
    alignItems:'flex-end',
    marginTop:50,
    marginBottom:20
  }
})
export default Amenidades