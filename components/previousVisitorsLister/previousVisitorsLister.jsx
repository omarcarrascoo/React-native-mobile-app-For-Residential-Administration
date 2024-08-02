import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import PreviousVisitCars from '../common/cards/previousVisitCard/PreviousVisitCars'
import PreviousVisitCards from '../common/cards/previousVisitCard/PreviousVisitCars'

function Lister({child}) {
  const numbers = [1, 2, 3, 4, 5];
  return (
        <View>
            {numbers.map(number => child)}
            {/* <PreviousVisitCards/>
            <PreviousVisitCards/>
            <PreviousVisitCards/>
            <PreviousVisitCards/>
            <PreviousVisitCards/> */}
        </View>
  )
}

export default Lister