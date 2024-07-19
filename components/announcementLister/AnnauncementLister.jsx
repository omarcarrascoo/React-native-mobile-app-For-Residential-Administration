import React from 'react'
import { ScrollView, Text } from 'react-native'
import AnnouncementImageCard from '../common/cards/eventCards/AnnouncementImageCard'

function AnnauncementLister() {
  return (
    <ScrollView style={{maxHeight:300}}>
        <AnnouncementImageCard bannerImages={1}/>
        <AnnouncementImageCard bannerImages={2}/>
        <AnnouncementImageCard bannerImages={3}/>
    </ScrollView>
  )
}

export default AnnauncementLister