import React from 'react'
import { ScrollView, View } from 'react-native'
import CommerceLogoCard from '../common/cards/commerceLogoCard/CommerceLogoCard'

function CommerceLister() {
  return (
    <ScrollView style={{display:'flex',gap:20}} horizontal>
        <CommerceLogoCard/>
        <CommerceLogoCard/>
        <CommerceLogoCard/>
        <CommerceLogoCard/>
    </ScrollView>
  )
}

export default CommerceLister