import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants/theme'
import EventSmallCard from '../common/cards/EventSmallCard/EventSmallCard';

function EventListerSmallCard() {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
  const [events, setEvents] = useState()
  return (
   <View style={styles.container}>
        <Text style={{color:COLORS.gray, marginBottom:10}}>{currentDate}</Text>
        <ScrollView>
            <EventSmallCard/>
            <EventSmallCard/>
            <EventSmallCard/>
            <EventSmallCard/>
        </ScrollView>
   </View>
  )
}


const styles = StyleSheet.create({
  container:{
    minHeight: 150,
    maxHeight: 170,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    shadowRadius: 5
  }
})
export default EventListerSmallCard