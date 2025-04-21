import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../constants/images";
import RowBackHeader from "../components/common/header/RowBackHeader";
import { COLORS, SIZES } from "../constants/theme";
import icons from "../constants/icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalExito from "../components/common/modals/ModalExito";
import { getAmenidadById } from "../redux/amenidadesRedux";
import { getTokenFromStorage } from "../redux/setToken.redux";
import { BASE_URL2 } from "../redux/requestMethods.redux";


function BookAmenity() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const {id} = useLocalSearchParams();
    const {editMode} = params
    const [invitadosCounter, setInvitadosCounter] = useState(0)
    const [modal, setModal] = useState(false)
    const [amenidades, setAmenidades] = useState([])
    const [headerToken, setHeaderToken] = useState()

    const fetchAmenidades = async () =>{
      const amennidadesInfo = await getAmenidadById(id)
      setAmenidades(amennidadesInfo)
      
    }
    useEffect(()=>{
        const setToken = async () =>{
            const data = await getTokenFromStorage()
            setHeaderToken(data)
        }
        
        
        setToken()
      fetchAmenidades()
    },[])



    const handleNavigation= () =>{
        router.back({
            pathname:'/amenidades',
        })
    }

    console.log(amenidades);
    
    const [date, setDate] = useState()
    console.log(modal);
    const handleDecrese = () =>{
        if (invitadosCounter === 0) {
            setInvitadosCounter(0)
        }else{
            setInvitadosCounter(invitados--)
        }
    }
    const handleReservation = () =>{
        setModal(true)
    }
    if (modal===true) {
        return(
            <ModalExito
                title={"¡Reserva exitosa!"}
                message={"Has reservado Rooftop exitosamente para 00/00/00 a las 00:00 PM."}
            />
        )
    } else {
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
                    <Image source={{ uri: `${BASE_URL2}${amenidades.Imagen_Amenidad}`, headers: {Authorization: `Zoho-oauthtoken ${headerToken}`}}} style={{ height: 220 }} />
                    <View style={styles.reservationContainer}>
                        <Text style={[styles.title, {paddingBottom:10, color: COLORS.alert}]}>Reserva: Rooftop</Text>
                        <ScrollView >
                            <View style={styles.infoSection}>
                                <Text style={styles.infoSubTilte}>{amenidades.Descripcion_Amenidad}</Text>
                                {/* <View style={styles.infoItem}><Image style={{ width: 22, height: 24 }} source={icons.calendar} /><Text style={styles.infoSubTilte}>Lunes, 13 de mayo 2024</Text></View> */}
                                <View style={styles.infoItem}><Image style={styles.infoIcon} source={icons.clock} /><Text style={styles.infoSubTilte}>{amenidades.Horarios_Amenidad}</Text></View>
                                <View style={styles.infoItem}><Image style={{ width: 24, height: 22 }} source={icons.mulitUser} /><Text style={styles.infoSubTilte}>{amenidades.Capacidad} invitados</Text></View>
                            </View>
                            <View>
                                <Text style={styles.title}>Dia y hora de tu reserva <Text style={{color:COLORS.alert, fontSize:SIZES.small}}>Obligatorio</Text></Text>
                                <View style={styles.dateItem}>
                                    <Text style={styles.description}>Fecha a reservar</Text>
                                    <TouchableOpacity style={styles.dateSelector}><Text style={{color: COLORS.gray, fontSize: SIZES.medium}}>DD/MM/AAAA</Text><Image style={{height:22, width:20}} source={icons.calendar}/></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.dateTimeSection}>
                                <Text style={styles.description}>Horario</Text>
                                <View style={styles.timeSection}>
                                    <TouchableOpacity style={[styles.timeSelector, {borderColor: COLORS.gray3}]}>
                                        <Text style={{color:COLORS.gray3}}>Seleccionar</Text>
                                        <Icon name="chevron-down" size={15} color={COLORS.gray3} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.timeSelector, {borderColor: COLORS.gray3}]}>
                                        <Text style={{color:COLORS.gray3}}>Seleccionar</Text>
                                        <Icon name="chevron-down" size={15} color={COLORS.gray3} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{paddingVertical: SIZES.large}}>
                                <Text style={styles.title}>Invitados <Text style={{color:COLORS.gray, fontSize:SIZES.small}}>Opcionales</Text></Text>
                                <View style={styles.invitadosItem}>
                                    <View style={styles.invitadosCounterBox}>
                                        <Text style={{color: COLORS.gray, fontSize: SIZES.medium}}>{invitadosCounter}</Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>handleDecrese} style={styles.btnCounter}>
                                        <Icon name="minus" size={15} color={COLORS.gray3} />
    
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>setInvitadosCounter(invitadosCounter++)} style={styles.btnCounter}>
                                        <Icon name="plus" size={15} color={COLORS.gray3} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                        </ScrollView> 
                    </View>
                </View>
                <View style={styles.footer}>
                    {editMode == "true"?
                        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <TouchableOpacity onPress={()=>handleReservation()} style={styles.btnAlert}><Text style={{ color: COLORS.alert, fontSize: SIZES.medium }}>Cancelar Reserva</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>handleReservation()} style={styles.btnSmall}><Text style={{ color: COLORS.white, fontSize: SIZES.medium }}>Hacer Cambios</Text></TouchableOpacity>
                        </View>
                        :
                        <TouchableOpacity onPress={()=>handleReservation()} style={styles.btn}><Text style={{ color: COLORS.white, fontSize: SIZES.medium }}>Hacer reserva</Text></TouchableOpacity>
                }
                </View>
            </SafeAreaView>
        );
    }
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
    },
    btnSmall: {
        backgroundColor: COLORS.MainPurple,
        padding: SIZES.medium,
        borderRadius: 10,
        alignItems: 'center',
        width:"48%"
    },
    btnAlert: {
        borderColor: COLORS.alert,
        borderWidth:1,
        padding: SIZES.medium,
        borderRadius: 10,
        alignItems: 'center',
        width:"48%"
    },
    dateTimeSection:{
        paddingVertical: SIZES.large, 
        borderBottomWidth:.4, 
        borderColor: COLORS.gray2
    },
    dateSelector:{
        flexDirection: "row",
        padding: SIZES.xSmall,
        borderWidth: .5,
        borderRadius:8,
        borderColor:COLORS.gray,
        alignItems: "center",
        justifyContent:"space-between"
    },
    dateItem:{
        gap:10, 
        marginTop: SIZES.medium
    },
    timeSection:{
        flexDirection:"row",
        justifyContent: 'space-between'
    },
    timeSelector:{
        flexDirection:"row",
        width:"48%",
        justifyContent: "space-between",
        padding: SIZES.small,
        borderWidth: .5,
        borderRadius:5
    },
    invitadosItem:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between'
    },
    invitadosCounterBox:{
        flexDirection: "row",
        padding: SIZES.xSmall,
        borderWidth: .5,
        borderRadius:8,
        borderColor:COLORS.gray,
        alignItems: "center",
        justifyContent:"space-between",
        justifyContent:"center",
        width:"54%",
        marginRight:10
    },
    btnCounter:{
        flexDirection: "row",
        padding: SIZES.xSmall,
        borderWidth: .5,
        borderRadius:8,
        borderColor:COLORS.gray,
        alignItems: "center",
        justifyContent:"space-between",
        justifyContent:"center",
        width:"20%"
    }
});

export default BookAmenity;
