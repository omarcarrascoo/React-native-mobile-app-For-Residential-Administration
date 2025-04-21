import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RowBackHeader from '../components/common/header/RowBackHeader'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CondoInputText from '../components/common/form/CondoInputText'
import { COLORS, SIZES } from '../constants/theme'
import CondoMainBtn from '../components/common/buttons/CondoMainBtn'
import CondoSubTitle from '../components/common/titles/CondoSubTitle'
import CondoText from '../components/common/titles/CondoText'
import CondoFileBtn from '../components/common/buttons/CondoFileBtn'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function condoInfo() {
    const [active, setActive] = useState(1)
    const router = useRouter()
  const handleBack = () => {
    router.back("/home")
  }
  return (
    <SafeAreaView>
        <Stack.Screen
        options={{
          autoHideHomeIndicator: true,
          header: () => (
            <RowBackHeader action={() => handleBack()} title={"Sobre el condominio"} />
          )
        }} 
      />
      <View style={{paddingHorizontal: SIZES.large}}>
        <CondoSubTitle Title={"Sobre el condominio"}/>
        <CondoText text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
        <CondoFileBtn stylish={{marginVertical:SIZES.xxLarge}}/>
        <CondoSubTitle Title={"Sobre el condominio"}/>
        <View style={styles.infoSection} >
            <Icon name='clock-time-three-outline' size={30} color={COLORS.gray}/>
            <CondoText styles={{ color:COLORS.gray}}  text={"1:00 PM - 3:00 PM"}/>
        </View>
        <View style={styles.infoSection}>
            <Icon name='map-marker-outline' size={30} color={COLORS.gray}/>
            <CondoText styles={{maxWidth:"90%", color:COLORS.gray}} text={"Avenida Cuscatlán #123, Colonia San Benito, San Salvador"}/>
        </View>
        <View>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    btnContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:SIZES.large
    },
    circle:{
        height: 20,
        width: 20,
        borderRadius:100,
        borderWidth:.5,
        borderColor:COLORS.gray,
        alignItems:'center',
        justifyContent:'center'
        
    },
    innerCircle:{
        height: 14,
        width: 14,
        borderRadius:100,
        borderWidth:.5,
        backgroundColor: COLORS.MainPurple
    },
    infoSection:{
        flexDirection:'row',
        alignItems:"center",
        maxWidth:"100%",
        gap:10
    }
})

export default condoInfo