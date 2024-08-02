import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES } from "../../../constants/theme";

function CondoTimeInput() {
  return (
    <View style={styles.dateTimeSection}>
    <Text style={styles.description}>Horario</Text>
    <View style={styles.timeSection}>
        <View style={styles.timeSelectorContainer}>
            <Text style={styles.label}>Fecha de Visita</Text>
            <TouchableOpacity style={[styles.timeSelector, {borderColor: COLORS.gray3}]}>
                <Text style={{color:COLORS.gray3}}>Seleccionar</Text>
                <Icon name="calendar" size={15} color={COLORS.gray3} />
            </TouchableOpacity>
        </View>
        <View style={styles.timeSelectorContainer}>
            <Text style={styles.label}>Hora de llegada</Text>
            <TouchableOpacity style={[styles.timeSelector, {borderColor: COLORS.gray3}]}>
                <Text style={{color:COLORS.gray3}}>Seleccionar</Text>
                <Icon name="clock-o" size={18} color={COLORS.gray3} />
            </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    description:{
        fontSize:SIZES.medium,
        marginBottom:8
    },
    dateTimeSection:{
        paddingVertical: SIZES.large, 

    },
    dateSelector:{
        flexDirection: "row",
        padding: SIZES.xSmall,
        borderWidth: .5,
        borderRadius:8,
        borderColor:COLORS.gray,
        alignItems: "center",
        justifyContent:"space-between"
    },
    dateItem:{
        gap:10, 
        marginTop: SIZES.medium
    },
    timeSection:{
        flexDirection:"row",
        justifyContent: 'space-between'
    },
    timeSelector:{
        flexDirection:"row",
        width:"98%",
        justifyContent: "space-between",
        padding: SIZES.small,
        borderWidth: .5,
        borderRadius:5
    },
    timeSelectorContainer:{
        width:"49%"
    },
    label:{
        marginBottom:5,
        fontSize:SIZES.small,
        color: COLORS.MainText
    }
});

export default CondoTimeInput