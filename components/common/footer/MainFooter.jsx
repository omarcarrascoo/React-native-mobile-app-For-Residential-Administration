import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import icons from '../../../constants/icons';

const MainFooter = () => {
    const router = useRouter();


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{router.push('/home')}}>
                <Image style={styles.icon} source={icons.home}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push('/amenidades')}}>
                <Image style={styles.icon} source={icons.amenidades}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push('/visitas')}}>
                <Image style={styles.icon} source={icons.visitas}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push('/banca')}}>
                <Image style={styles.icon} source={icons.banca}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push('/cupones')}}>
                <Image style={styles.icon} source={icons.cupones}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingVertical: 30,
        paddingHorizontal: SIZES.large,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        width:'100%',
        bottom:0
    },
    icon:{
        width:30,
        height:30
    }
})
export default MainFooter;
