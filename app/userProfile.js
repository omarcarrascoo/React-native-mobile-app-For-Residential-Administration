import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import RowBackHeader from '../components/common/header/RowBackHeader'
import CondoSubTitle from '../components/common/titles/CondoSubTitle'
import CondoText from '../components/common/titles/CondoText'
import { COLORS, ScreenHeigh, SIZES } from '../constants/theme'
import Icon from 'react-native-vector-icons/FontAwesome';
import images from '../constants/images'

function userProfile() {
  const router = useRouter()
  const handleBack = () => {
    router.back("/home")
  }

  return (
    <SafeAreaView style={{ flex: 1, zIndex:3000, backgroundColor:COLORS.MainPurple}}>
      <Stack.Screen
        
        options={{
          autoHideHomeIndicator: true,
          header: () => (
            <RowBackHeader action={() => handleBack()} title={"Perfil de usuario"} longHeight={true} />
          )
        }} 
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.HeaderImage} source={images.profile} />
          </TouchableOpacity>
          <View style={styles.headerTexts}>
            <CondoSubTitle styling={{ marginVertical: SIZES.xSmall }} Title={"John Doe"} />
            <CondoText text={"johndoe1"} />
          </View>
        </View>
        <View style={{ paddingHorizontal: SIZES.medium }}>
          <View style={styles.contact}>
            <Icon name="phone" size={24} color={COLORS.gray} />
            <CondoText text={"503+ 7777 0000"} />
          </View>
          <View style={styles.contact}>
            <Icon name="envelope-o" size={24} color={COLORS.gray} />
            <CondoText text={"usuario.correo@mail.com"} />       
          </View>
        </View>
        <View style={{ paddingHorizontal: SIZES.medium }}>
          <TouchableOpacity onPress={()=>router.push("/contactInfo")} style={styles.btnContainer}>
            <CondoText text={"Editar información de contacto"} />
            <Icon name="chevron-right" size={15} color={COLORS.gray} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.push("/resetPsw")} style={styles.btnContainer}>
            <CondoText text={"Cambiar contraseña"} />
            <Icon name="chevron-right" size={15} color={COLORS.gray} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>router.push("/preferences")} style={styles.btnContainer}>
            <CondoText text={"Preferencias"} />
            <Icon name="chevron-right" size={15} color={COLORS.gray} />
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    borderBottomColor: COLORS.gray,
    borderBottomWidth: .4,
    paddingVertical: SIZES.xLarge,
  },
  contact: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    paddingVertical: SIZES.large
  },
  header: {
    padding: SIZES.medium,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    zIndex:3000
  },
  HeaderImage: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  container: {
    backgroundColor: COLORS.white,
    height: ScreenHeigh,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    width: "100%",
    zIndex: 3000,
    paddingTop: 20
  }
})

export default userProfile
