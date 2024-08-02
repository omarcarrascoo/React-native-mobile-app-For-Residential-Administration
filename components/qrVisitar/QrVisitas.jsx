import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import images from '../../constants/images'
import icons from '../../constants/icons'

function QrVisitas({encomienda}) {
  return (
    <View style={{backgroundColor:COLORS.MainPurple, paddingVertical: SIZES.large *2.5, paddingHorizontal: SIZES.large, borderRadius:10, alignItems:'center'}}>
        <Text style={{color:COLORS.white, textAlign:'center', fontSize:SIZES.large, marginBottom:SIZES.medium}}>{encomienda?"¡Notificación de encomienda recibida!":"QR creado exitosamente"}</Text>
        <Text style={{color:COLORS.white, textAlign:'center', fontSize:SIZES.medium, marginBottom:SIZES.medium, fontWeight:300}}>{encomienda?"Hemos informado exitosamente a la administración sobre tu encomienda. Cuando tu paquete llegue al condominio, recibirás una notificación.":"Comparte este código con tus visitas. Debe ser presentado en la entrada para poder acceder."}</Text>
        {encomienda?(
            null
        ):(
            <>
            <View style={{padding: SIZES.small, backgroundColor:COLORS.white, borderRadius:10, alignItems:'center', width:"80%"}}>
                <Image style={{width:220, height:220}} source={images.qrtest}/>
            </View>
            <View style={{flexDirection:"row", width:"100%", justifyContent: 'center', marginTop: SIZES.medium, gap:10}}>
                <TouchableOpacity style={{backgroundColor:COLORS.white, flexDirection:"row", borderRadius:10,  padding:12, width:"60%", alignItems:'center', justifyContent:"center", gap:10}}>
                    <Image style ={{width:20, height:20}} source={icons.share}/>
                    <Text style={{color: COLORS.MainPurple}}>Compartir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:COLORS.white, borderWidth:1, borderRadius:10,flexDirection:"row", padding:12, width:"20%", alignItems:'center', justifyContent:"center"}}>
                    <Image style ={{width:20, height:20}} source={icons.download}/>
                </TouchableOpacity>
            </View>
            </>
        )}
    </View>
  )
}

export default QrVisitas