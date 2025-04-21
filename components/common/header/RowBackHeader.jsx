import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../../../constants/images";
import { COLORS, SIZES } from "../../../constants/theme";
import ScreenHeaderProfile from "./ScreenHeaderProfile";
import icons from "../../../constants/icons";
import { useState } from "react";


function RowBackHeader({action, title, longHeight}) {
  return (
    title?
      longHeight!=undefined?
      (<View source={images.bgHeader} style={styles.container3}>
        <View style={{justifyContent:'space-between', alignItems:'center', flexDirection: "row", width:"90%"}}>
          <TouchableOpacity style={{flexDirection:"row", gap:8, alignItems:'center'}} onPress={action}>                   
              <Image style={{width:26, height:16}} source={icons.rowBack}/>
              <Text style={{fontSize:SIZES.large, color:COLORS.white}}>{title}</Text>
          </TouchableOpacity>
        </View>
      </View>)
      :
      (<ImageBackground imageStyle={{borderRadius:12}} source={images.bgHeader} style={styles.container2}>
          <View style={{justifyContent:'space-between', alignItems:'center', flexDirection: "row", width:"90%"}}>
              <TouchableOpacity style={{flexDirection:"row", gap:8, alignItems:'center'}} onPress={action}>                   
                  <Image style={{width:26, height:16}} source={icons.rowBack}/>
                  <Text style={{fontSize:SIZES.large, color:COLORS.white}}>{title}</Text>
              </TouchableOpacity>
            </View>
      </ImageBackground>)
    :
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
         width:"100%",
         zIndex:1
         
    },
    container2:{
      minHeight:90, 
      margin:0, 
      paddingTop:60, 
      paddingBottom:30,
      borderRadius:12,
      alignItems:'center',
      backgroundColor:COLORS.MainPurple,
      zIndex:1
    },
    container3:{
      minHeight:90, 
      margin:0, 
      paddingTop:60, 
      paddingBottom:70,
      alignItems:'center',
      backgroundColor:COLORS.MainPurple,
      zIndex:1
    }
})

export default RowBackHeader