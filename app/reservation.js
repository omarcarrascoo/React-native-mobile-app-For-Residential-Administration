import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../constants/images";
import RowBackHeader from "../components/common/header/RowBackHeader";
import { COLORS, SIZES } from "../constants/theme";
import icons from "../constants/icons";

function Reservation() {
    const router = useRouter();
    const handleNavigation= () =>{
        router.push({
            pathname:'/amenidades',
            params:{reservation:"true"}
        })
    }
    const handleNavigationEdit= () =>{
        router.push({
            pathname:'/bookAmenity',
            params:{editMode:"true"}
        })
    }
    return (
        <SafeAreaView style={styles.contentContainer}>
            <Stack.Screen
                options={{
                    autoHideHomeIndicator: true,
                    header: () => (
                        <RowBackHeader action={()=>handleNavigation()}/>
                    )
                }}
            />
            <View style={styles.innerContainer}>
                <Image source={images.test3} style={{ height: 220 }} />
                <ScrollView style={styles.reservationContainer}>
                    <Text style={styles.title}>Reserva: Rooftop</Text>
                    <View style={styles.infoSection}>
                        <View style={styles.infoItem}><Image style={{ width: 22, height: 24 }} source={icons.calendar} /><Text style={styles.infoSubTilte}>Lunes, 13 de mayo 2024</Text></View>
                        <View style={styles.infoItem}><Image style={styles.infoIcon} source={icons.clock} /><Text style={styles.infoSubTilte}>1:00 PM - 6:00 PM</Text></View>
                        <View style={styles.infoItem}><Image style={{ width: 24, height: 22 }} source={icons.mulitUser} /><Text style={styles.infoSubTilte}>10 invitados</Text></View>
                    </View>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <TouchableOpacity style={styles.shareItem}><Image source={icons.share} style={{ width: 25, height: 25 }} /><Text style={styles.shareText}>Enviar codigo de entrada</Text></TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.footer} >
                <TouchableOpacity onPress={()=> handleNavigationEdit()} style={styles.btn}><Text style={{ color: COLORS.white, fontSize: SIZES.medium }}>Editar</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    innerContainer: {
        flex: 1
    },
    reservationContainer: {
        backgroundColor: COLORS.white,
        minHeight: 500,
        borderRadius: 20,
        marginTop: -20,
        padding: SIZES.large,
        flex: 1
    },
    title: {
        fontSize: SIZES.large,
        color: COLORS.MainText
    },
    infoSection: {
        borderTopColor: COLORS.gray,
        borderTopWidth: .3,
        borderBlockColor: COLORS.gray,
        borderBottomWidth: .3,
        paddingVertical: SIZES.large,
        marginVertical: SIZES.large,
        gap: SIZES.medium
    },
    infoItem: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },
    infoIcon: {
        width: 22,
        height: 22
    },
    infoSubTilte: {
        color: COLORS.gray2
    },
    description: {
        fontSize: SIZES.medium,
        color: COLORS.SecondText,
        lineHeight: 22,
        marginVertical: SIZES.large
    },
    shareItem: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        marginVertical: SIZES.large
    },
    shareText: {
        color: COLORS.MainPurple,
        fontSize: SIZES.medium
    },
    footer: {
        padding: SIZES.large,
        backgroundColor: COLORS.white,
    },
    btn: {
        backgroundColor: COLORS.MainPurple,
        padding: SIZES.medium,
        borderRadius: 10,
        alignItems: 'center'
    }
});

export default Reservation;
