import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import images from '../../constants/images'
import { COLORS } from '../../constants/theme'
import { useRouter } from 'expo-router';

function VistiasRecurrentesLister() {
    const router = useRouter();
  return (
    <ScrollView style={{backgroundColor:COLORS.white, padding:14, borderRadius:8,}} horizontal>
        <TouchableOpacity onPress={()=>{router.push('/formularioVisitas')}} style={{alignItems:'center', justifyContent: 'center', marginRight: 20}}>
            <Image source={images.jd}/>
            <Text style={{color:COLORS.gray2, marginTop:3}}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', justifyContent: 'center', marginRight: 20}}>
            <Image source={images.jd}/>
            <Text style={{color:COLORS.gray2, marginTop:3}}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', justifyContent: 'center', marginRight: 20}}>
            <Image source={images.jd}/>
            <Text style={{color:COLORS.gray2, marginTop:3}}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', justifyContent: 'center', marginRight: 20}}>
            <Image source={images.jd}/>
            <Text style={{color:COLORS.gray2, marginTop:3}}>John Doe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', justifyContent: 'center', marginRight: 20}}>
            <Image source={images.jd}/>
            <Text style={{color:COLORS.gray2, marginTop:3}}>John Doe</Text>
        </TouchableOpacity>        
    </ScrollView>
  )
}

export default VistiasRecurrentesLister