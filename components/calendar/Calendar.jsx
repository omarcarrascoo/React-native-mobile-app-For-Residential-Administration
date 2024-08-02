// import React from 'react'
// import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { COLORS, SIZES } from '../../constants/theme';
// import Lister from '../previousVisitorsLister/previousVisitorsLister';
// import CalendarCard from '../common/cards/calendarCard/CalendarCard';


// function Calendar() {
//   return (
//     <View style={styles.container}>
//         <View style={styles.monthPicker}>
//             <TouchableOpacity style={styles.moveBtn}>
//                 <Icon name="chevron-left" size={16} color={COLORS.MainPurple}/>
//             </TouchableOpacity>
//             <Text style={styles.dateTitle}>Septiembre 2024</Text>
//             <TouchableOpacity style={styles.moveBtn}>
//                 <Icon name="chevron-right" size={16} color={COLORS.MainPurple}/>
//             </TouchableOpacity>
//         </View>
//         <ScrollView  centerContent={true} horizontal={true} style={styles.dayPicker}>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>SA</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>31</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>DO</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>1</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>LU</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>2</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>MA</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>3</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>MI</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>4</Text>
//                 </View>
//                 <View style={styles.taskIndicatorContainer}>
//                     <View style={styles.taskIndicator}/>
//                     <View style={styles.taskIndicator}/>
//                     <View style={styles.taskIndicator}/>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>JU</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>5</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>VI</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>6</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>SA</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>7</Text>
//                 </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.dayContainer}>
//                 <Text style={{fontSize:SIZES.xSmall, color:COLORS.MainText, marginBottom:6}}>DO</Text>
//                 <View style={styles.dayBtn}>
//                     <Text style={{fontSize:SIZES.small, color:COLORS.MainText}}>8</Text>
//                 </View>
//             </TouchableOpacity>
//         </ScrollView>
//         <View style={{backgroundColor:COLORS.lightWhite}}>
//             <ScrollView style={{padding:SIZES.large}}>
//                 <Lister
//                     child={<CalendarCard/>}
//                 />
//             </ScrollView>
//         </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:COLORS.white
//     },
//     monthPicker:{
//         alignItems:"center",
//         justifyContent:"space-between",
//         flexDirection:'row',
//         padding:SIZES.large,
        
//     },
//     moveBtn:{
//         backgroundColor:COLORS.tillPurple,
//         height:28,
//         width:28,
//         borderRadius:100,
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     dayPicker:{
//         flexDirection:'row',
//         marginLeft: -20,
//         height:100,
//         paddingTop:10
//     },
//     dayContainer:{
//         alignItems:"center",
//         marginHorizontal: 10
//     },
//     dayBtn:{
//         backgroundColor:COLORS.tillPurple,
//         height:28,
//         width:28,
//         borderRadius:100,
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     dateTitle:{
//         fontSize:SIZES.large,
//         color: COLORS.MainPurple
//     },
//     taskIndicatorContainer:{
//         flexDirection:"row",
//         paddingVertical:4,
//         gap:2
//     },
//     taskIndicator:{
//         width:7,
//         height:7,
//         backgroundColor: COLORS.MainPurple,
//         borderRadius:100
//     }
// })
// export default Calendar




































// import React, { useState } from 'react';
// import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { COLORS, SIZES } from '../../constants/theme';
// import Lister from '../previousVisitorsLister/previousVisitorsLister';
// import CalendarCard from '../common/cards/calendarCard/CalendarCard';
// import moment from 'moment';

// function Calendar() {
//   const [currentMonth, setCurrentMonth] = useState(moment());

//   const handlePrevMonth = () => {
//     setCurrentMonth(currentMonth.clone().subtract(1, 'months'));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth(currentMonth.clone().add(1, 'months'));
//   };

//   const generateDays = () => {
//     const startOfMonth = currentMonth.clone().startOf('month').startOf('week');
//     const endOfMonth = currentMonth.clone().endOf('month').endOf('week');
//     const day = startOfMonth.clone().subtract(1, 'day');
//     const days = [];
    
//     while (day.isBefore(endOfMonth, 'day')) {
//       days.push(
//         <TouchableOpacity key={day} style={styles.dayContainer}>
//           <Text style={{ fontSize: SIZES.xSmall, color: COLORS.MainText, marginBottom: 6 }}>
//             {day.format('dd')[0]}
//           </Text>
//           <View style={styles.dayBtn}>
//             <Text style={{ fontSize: SIZES.small, color: COLORS.MainText }}>{day.date()}</Text>
//           </View>
//           {/* Add task indicators conditionally if needed */}
//         </TouchableOpacity>
//       );
//       day.add(1, 'day');
//     }
    
//     return days;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.monthPicker}>
//         <TouchableOpacity style={styles.moveBtn} onPress={handlePrevMonth}>
//           <Icon name="chevron-left" size={16} color={COLORS.MainPurple} />
//         </TouchableOpacity>
//         <Text style={styles.dateTitle}>{currentMonth.format('MMMM YYYY')}</Text>
//         <TouchableOpacity style={styles.moveBtn} onPress={handleNextMonth}>
//           <Icon name="chevron-right" size={16} color={COLORS.MainPurple} />
//         </TouchableOpacity>
//       </View>
//       <ScrollView centerContent={true} horizontal={true} style={styles.dayPicker}>
//         {generateDays()}
//       </ScrollView>
//       <View style={{ backgroundColor: COLORS.lightWhite }}>
//         <ScrollView style={{ padding: SIZES.large }}>
//           <Lister child={<CalendarCard />} />
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: COLORS.white
//   },
//   monthPicker: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     padding: SIZES.large,
//   },
//   moveBtn: {
//     backgroundColor: COLORS.tillPurple,
//     height: 28,
//     width: 28,
//     borderRadius: 100,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   dayPicker: {
//     flexDirection: 'row',
//     marginLeft: -20,
//     height: 100,
//     paddingTop: 10
//   },
//   dayContainer: {
//     alignItems: 'center',
//     marginHorizontal: 10
//   },
//   dayBtn: {
//     backgroundColor: COLORS.tillPurple,
//     height: 28,
//     width: 28,
//     borderRadius: 100,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   dateTitle: {
//     fontSize: SIZES.large,
//     color: COLORS.MainPurple
//   },
//   taskIndicatorContainer: {
//     flexDirection: 'row',
//     paddingVertical: 4,
//     gap: 2
//   },
//   taskIndicator: {
//     width: 7,
//     height: 7,
//     backgroundColor: COLORS.MainPurple,
//     borderRadius: 100
//   }
// });

// export default Calendar;

















import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS, SIZES } from '../../constants/theme';
import Lister from '../previousVisitorsLister/previousVisitorsLister';
import CalendarCard from '../common/cards/calendarCard/CalendarCard';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  format,
  eachDayOfInterval,
} from 'date-fns';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateChange = (event, selectedDate) => {
    setIsDatePickerVisible(Platform.OS === 'ios'); // Keep visible on iOS until confirmed
    if (selectedDate) {
      setCurrentMonth(selectedDate);
    }
  };

  const generateDays = () => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    const days = eachDayOfInterval({ start, end });

    return days.map((day, index) => (
      <TouchableOpacity key={index} style={styles.dayContainer}>
        <Text style={{ fontSize: SIZES.xSmall, color: COLORS.MainText, marginBottom: 6 }}>
          {format(day, 'EE')[0]}
        </Text>
        <View style={styles.dayBtn}>
          <Text style={{ fontSize: SIZES.small, color: COLORS.MainText }}>{format(day, 'd')}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.monthPicker}>
        <TouchableOpacity style={styles.moveBtn} onPress={handlePrevMonth}>
          <Icon name="chevron-left" size={16} color={COLORS.MainPurple} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
          {/* <Text style={styles.dateTitle}>{format(currentMonth, 'MMMM yyyy')}</Text> */}
          <DateTimePicker
              value={currentMonth}
              mode="date"
              display={Platform.OS === 'ios' ? 'default' : 'spinner'}
              onChange={handleDateChange}
              style={{backgroundColor:COLORS.white, color:COLORS.MainPurple}}
              textColor='red'
              themeVariant="light"
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moveBtn} onPress={handleNextMonth}>
          <Icon name="chevron-right" size={16} color={COLORS.MainPurple} />
        </TouchableOpacity>
      </View>
      <ScrollView centerContent={true} horizontal={true} style={styles.dayPicker}>
        {generateDays()}
      </ScrollView>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <ScrollView style={{ padding: SIZES.large }}>
          <Lister child={<CalendarCard />} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  monthPicker: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: SIZES.large,
  },
  moveBtn: {
    backgroundColor: COLORS.tillPurple,
    height: 28,
    width: 28,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayPicker: {
    flexDirection: 'row',
    marginLeft: -20,
    height: 100,
    paddingTop: 10,
  },
  dayContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dayBtn: {
    backgroundColor: COLORS.tillPurple,
    height: 28,
    width: 28,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTitle: {
    fontSize: SIZES.large,
    color: COLORS.MainPurple,
  },
  taskIndicatorContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    gap: 2,
  },
  taskIndicator: {
    width: 7,
    height: 7,
    backgroundColor: COLORS.MainPurple,
    borderRadius: 100,
  },
  datePickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeBtn: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLORS.MainPurple,
    borderRadius: 5,
  },
  closeBtnText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});

export default Calendar;

























