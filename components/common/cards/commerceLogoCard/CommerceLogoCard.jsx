import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import images from '../../../../constants/images'
import { SIZES } from '../../../../constants/theme'
import { getTokenFromStorage } from '../../../../redux/setToken.redux'
import { BASE_URL2 } from '../../../../redux/requestMethods.redux'

function CommerceLogoCard({commerce}) {
  const [headerToken, setHeaderToken] = useState()
    useEffect(()=>{
        const setToken = async () =>{
            const data = await getTokenFromStorage()
            setHeaderToken(data)
        }
        setToken()
    },[])
  return (
    <TouchableOpacity style={{marginRight:SIZES.xSmall}}>
        <Image style={{width:100, height:100, borderRadius:5}} source={{ uri: `${BASE_URL2}${commerce.Imagen_Comercio}`, headers: {Authorization: `Zoho-oauthtoken ${headerToken}`}}}/>
    </TouchableOpacity>
  )
}

export default CommerceLogoCard