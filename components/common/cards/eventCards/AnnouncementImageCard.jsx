import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import ScreenHeaderProfile from '../../header/ScreenHeaderProfile'
import images from '../../../../constants/images'
import { COLORS, SIZES } from '../../../../constants/theme'

function AnnouncementImageCard({bannerImages}) {
  return (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <View style={styles.profile}>
                <ScreenHeaderProfile imageUrl={images.profile} dimension = '100%'/>
                <View style={{}}>
                    <Text style={{fontSize:SIZES.medium, color:COLORS.SecondText}}>John Doe</Text>
                    <Text style={{color:COLORS.gray}} >Administrador</Text>
                </View>
            </View>
            <View>
                 <Text style={{textAlign:'right', color:COLORS.gray}}>Miercoles, 7 de abril</Text>
                 <Text style={{textAlign:'right', color:COLORS.gray}}>00:00 A.M.</Text>
            </View>
        </View>
        <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        {bannerImages==1?
        <View style={styles.imagesContainer1}>
            <Image style={{width:"100%", height:140, borderRadius:10}} source={images.test1}/>
        </View>:<></> }
        {bannerImages==2?
        <View style={styles.imagesContainer2}>
            <Image style={{width:"50%", height:140, borderRadius:10}} source={images.test1}/>
            <Image style={{width:"50%", height:140, borderRadius:10}} source={images.test2}/>
        </View>:<></> }
        {bannerImages==3?
        <View style={styles.imagesContainer3}>
            <Image style={{width:"50%", height:140, borderRadius:10}} source={images.test1}/>
            <View style={{width:'50%', gap:3}}>
                <Image style={{width:"100%", height:70, borderRadius:10}} source={images.test2}/>
                <ImageBackground imageStyle={{backgroundColor:'#000', borderRadius:10}} style={{width:"100%", height:70, borderRadius:10}} source={images.test2}>
                    <View style={{backgroundColor:'rgba(0,0,0,0.60)',borderRadius:10, width:'100%', height:"100%" , alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:COLORS.white}}>3+</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>:<></> }
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:COLORS.white,
        paddingVertical:20,
        paddingHorizontal:14,
        maxHeight: 300,
        borderRadius:10,
        marginBottom:14
    },
    cardHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    cardText:{
        marginTop:10,
        color:COLORS.SecondText,
        fontSize:SIZES.medium
    },
    imagesContainer1:{
        marginTop:10,
        flexDirection: 'row',
        gap:3
    },
    imagesContainer2:{
        marginTop:10,
        flexDirection: 'row',
        gap:3
    },
    imagesContainer3:{
        marginTop:10,
        flexDirection: 'row',
        gap:3,
        alignItems: 'center'
    }
})

export default AnnouncementImageCard