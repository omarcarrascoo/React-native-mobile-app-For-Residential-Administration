import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../../../constants/images";
import { COLORS, SIZES } from "../../../constants/theme";
import ScreenHeaderProfile from "./ScreenHeaderProfile";
import icons from "../../../constants/icons";
import { useState } from "react";


const MainHeader = () =>{

    const [open, setOpen] = useState(false)
    return(
        <>
        <ImageBackground source={images.fondoHeader} imageStyle={{borderEndStartRadius:20, borderEndEndRadius:20}} style={{minHeight:90, margin:0, paddingTop:60, paddingBottom: 30, alignItems:'center'}}>
            <View style={{justifyContent:'space-between', alignItems:'center', flexDirection: "row", width:"90%"}}>
                <TouchableOpacity onPress={()=>setOpen(!open)}>
                    <View style={{flexDirection: 'row', alignItems:'center', gap:10}}>
                        <ScreenHeaderProfile handlePress={()=>setOpen(!open)} imageUrl={images.profile} dimension = '100%'/>
                        <View>
                            <Text style={{color:COLORS.lightWhite, fontSize:20, fontWeight:500}}><Text style={{fontWeight:800, }}>Hola,</Text>John Doe</Text>
                            <Text style={{color:COLORS.lightWhite}}>Apt. 15-A</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={icons.notificationBell}
                        style={{width:30, height:30}}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
        {open === true ? (
            <>
                <View style={styles.menuContainer}>
                    <View style={{alignItems:"flex-end"}}><TouchableOpacity onPress={()=>setOpen(false)}><Text>Close</Text></TouchableOpacity></View>
                    <View style={{flexDirection: 'row', alignItems:'center', gap: 5, marginBottom: 30, marginTop: 20}}>
                        <ScreenHeaderProfile imageUrl={images.profile} dimension = '100%'/>
                        <Text style={{color:COLORS.MainText, fontSize:20, fontWeight:700}}>John Doe</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.menuItemBtn}><Text style={{color:COLORS.white}}>Apt.15-A, Condominio Apple</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuItemText}>Perfil de usuario</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuItemText}>Configuracion de interfaz</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuItemText}>Sobre el condominio</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuItemText}>Ayuda y apoyo</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}><Text style={styles.menuItemText}>Cerrar Sesion</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bgDark}></View>
            </>
        ): <></>}
        </>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
        position: "absolute",
        marginTop: 70,
        backgroundColor: 'rgb(217,217,217)',
        marginLeft: SIZES.large,
        padding: SIZES.large,
        borderRadius: 20,
        paddingTop: 50,
        minHeight: 500,
        zIndex:100
    },
    menuItemBtn:{
        backgroundColor: COLORS.MainPurple,
        marginBottom: 50,
        borderRadius:10,
        padding: 10, 
        width: "100%",
    },
    menuItem:{
        paddingBottom:18,
        borderBottomColor: COLORS.gray,
        borderBottomWidth:.2,
        marginBottom: 15
    },
    menuItemText:{
        fontSize: SIZES.medium,
        color:COLORS.SecondText
    },
    bgDark:{
        backgroundColor: "#0000007a",
        width:"100%",
        height:"900%",
        position: 'absolute'
    }
})

export default MainHeader