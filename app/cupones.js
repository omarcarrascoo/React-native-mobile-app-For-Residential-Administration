import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, ScreenHeigh, SIZES } from '../constants/theme';
import { Stack, useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router';
import MainHeader from '../components/common/header/MainHeader';
import MainFooter from '../components/common/footer/MainFooter';
import GeneralFilter from '../components/common/filters/GeneralFilter';
import CommerceLister from '../components/commerceLister/CommerceLister';
import CuponesLister from '../components/cuponesLister/CuponesLister';
import MainSearchBar from '../components/common/searchBars/MainSearchBar';
import { useRoute } from '@react-navigation/native';

function cupones() {
  const router = useRouter()
  const [menuCuponsView, setMenuCuponsView] = useState(false)
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
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkWhite }}>
      <Stack.Screen
        options={{
          autoHideHomeIndicator:true,
          header: () =>(
            <MainHeader/>
          )
        }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.menu}>
          {menuCuponsView === false?
          <>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setMenuCuponsView(false)}>
              <View style={{width:8, height:8, backgroundColor:COLORS.MainPurple, borderRadius:100, marginBottom:10}}></View>
              <Text style={{color:COLORS.MainPurple, fontWeight:600, fontSize:SIZES.medium}}>Explorar</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>setMenuCuponsView(true)}>
              <Text style={{color:COLORS.gray, fontWeight:400, fontSize:SIZES.medium}}>Mis Cupones Guardados</Text>
            </TouchableOpacity>
          </>
          :
          <>
            <TouchableOpacity style={{alignItems:'center'}}  onPress={()=>setMenuCuponsView(false)}>
              <Text style={{color:COLORS.gray, fontWeight:400, fontSize:SIZES.medium}}>Explorar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}  onPress={()=>setMenuCuponsView(true)}>
              <View style={{width:8, height:8, backgroundColor:COLORS.MainPurple, borderRadius:100, marginBottom:10}}></View>
              <Text style={{color:COLORS.MainPurple, fontWeight:600, fontSize:SIZES.medium}}>Mis Cupones Guardados</Text>
            </TouchableOpacity>
          </>}
        </View>
        <View>
          {menuCuponsView === false?<></>:<View style={{paddingHorizontal:SIZES.large, marginBottom:SIZES.large}}><MainSearchBar filterFullOptions={filterFullOptions} orderByFullOptions={orderByFullOptions}/></View>}    
          {menuCuponsView === false?<></>:<GeneralFilter filterFullOptions={filterFullOptions} orderByFullOptions={orderByFullOptions}/>}
            
          {menuCuponsView === false?
            <>
              <View style={{paddingLeft:SIZES.large}}>
                <Text style={[styles.subtitle, {marginBottom:SIZES.large}]}>Comericios</Text>
                <CommerceLister/>
              </View>
              <View>
                <View style={{paddingHorizontal:SIZES.large, flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom: SIZES.large, marginTop:SIZES.xxLarge}}>
                  <Text style={[styles.subtitle]}>Cupones Recientes</Text>
                  <TouchableOpacity onPress={()=>router.push("/allCupons")}>
                    <Text style={{color:COLORS.MainPurple}}>Ver todos</Text>
                  </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:SIZES.large}}>
                  <CuponesLister styles={{minHeight:250, maxHeight:250}}/>
                </View>
              </View>
            </>
            : 
            <View style={{paddingHorizontal:SIZES.large}}>
              <CuponesLister mark={true} styles={{minHeight:350, maxHeight:350}}/>
            </View>
          }
        </View>
      </View>
      <MainFooter style={styles.footer}/>
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
    marginBottom:30
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.darkWhite
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  subtitle:{
    fontSize:SIZES.large,
    color:COLORS.MainText,
},
})

export default cupones