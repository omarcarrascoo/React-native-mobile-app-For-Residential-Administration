import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import images from '../../../../constants/images'
import { SIZES } from '../../../../constants/theme'

function CommerceLogoCard() {
  return (
    <TouchableOpacity style={{marginRight:SIZES.xSmall}}>
        <Image style={{width:100, height:100, borderRadius:5}} source={images.logoBrainWare}/>
    </TouchableOpacity>
  )
}

export default CommerceLogoCard