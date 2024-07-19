import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../../../constants/images";
import { COLORS, SIZES } from "../../../constants/theme";
import ScreenHeaderProfile from "./ScreenHeaderProfile";
import icons from "../../../constants/icons";
import { useState } from "react";


function RowBackHeader({action}) {
  return (
    <ImageBackground source={images.transparentBg} style={styles.container}>
            <View style={{justifyContent:'space-between', alignItems:'center', flexDirection: "row", width:"90%"}}>
                <TouchableOpacity onPress={action}>
                    <Image style={{width:30, height:20}} source={icons.rowBack}/>
                </TouchableOpacity>
            </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        minHeight:90, 
        margin:0, 
        paddingTop:60, 
        paddingBottom:80,
         alignItems:'center',
         position:"absolute",
         width:"100%"
    },
})

export default RowBackHeader