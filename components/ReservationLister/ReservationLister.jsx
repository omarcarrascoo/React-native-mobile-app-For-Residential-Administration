import React from 'react'
import { ScrollView } from 'react-native'
import ReservasCard from '../common/cards/ReservasCard/ReservasCard'

function ReservationLister() {
  return (
      <ScrollView style={{maxHeight:448}}>
        <ReservasCard/>
        <ReservasCard/>
        <ReservasCard/>
        <ReservasCard/>
        <ReservasCard/>
        <ReservasCard/>
      </ScrollView>
  )
}

export default ReservationLister