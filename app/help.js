import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RowBackHeader from '../components/common/header/RowBackHeader'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CondoInputText from '../components/common/form/CondoInputText'
import { COLORS, SIZES } from '../constants/theme'
import CondoMainBtn from '../components/common/buttons/CondoMainBtn'
import CondoSubTitle from '../components/common/titles/CondoSubTitle'
import CondoText from '../components/common/titles/CondoText'
import CondoDropdown from '../components/common/form/CondoDropDownInput'
import CondoTextBoxInput from '../components/common/form/CondoTextBoxInput'
import CondoImageUpload from '../components/common/form/CondoImageUpload'

function help() {
    const [active, setActive] = useState(1)
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
  
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    autoHideHomeIndicator: true,
                    header: () => (
                        <RowBackHeader action={() => handleBack()} title={"Reportes y sugerencias"} />
                    )
                }} 
            />
            <ScrollView style={{paddingHorizontal: SIZES.large, flex: 1}}>
                <CondoText text={"Tu opinión es muy importante para nosotros. Realiza sugerencias y reportes de nuestros servicios por este medio."}/>
                <CondoDropdown stylish={{marginTop:SIZES.xLarge}} label={"Categoría"} options={options} />
                <CondoTextBoxInput stylish={{marginTop:SIZES.xLarge * 1.5}} label={"Escribe tu reporte o sugerencia"} placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <CondoImageUpload stylish={{marginTop:SIZES.medium, marginBottom:100}} label={"Adjunte una fotografía como evidencia"}/>
            </ScrollView>
            <View style={styles.btnContainer}>
                <CondoMainBtn text={"Enviar"}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.white,
        padding: SIZES.large,
        height:90
    },
    circle:{
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: .5,
        borderColor: COLORS.gray,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle:{
        height: 14,
        width: 14,
        borderRadius: 100,
        borderWidth: .5,
        backgroundColor: COLORS.MainPurple
    }
})

export default help

