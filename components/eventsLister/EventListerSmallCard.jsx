import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import EventSmallCard from '../common/cards/EventSmallCard/EventSmallCard';

function EventListerSmallCard({ events }) {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

  return (
    <View style={styles.container}>
      {/* Display current date if needed */}
      {/* <Text style={{color:COLORS.gray, marginBottom:10}}>{currentDate}</Text> */}
      
      <ScrollView>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <EventSmallCard 
              key={index} 
              event={event} 
              // Pass additional event props as needed
            />
          ))
        ) : (
          <Text style={{ color: COLORS.gray }}>No events available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 150,
    maxHeight: 170,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    shadowRadius: 5,
  },
});

export default EventListerSmallCard;
