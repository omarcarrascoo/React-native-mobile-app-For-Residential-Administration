import React from 'react'
import { ScrollView } from 'react-native'
import AmenidadesCard from '../common/cards/amenidadesCard/AmenidadesCard'

function AmenidadesLister() {
  return (
    <ScrollView horizontal style={{gap:5}}>
        <AmenidadesCard/>
        <AmenidadesCard/>
        <AmenidadesCard/>
        <AmenidadesCard/>
    </ScrollView>
  )
}

export default AmenidadesLister