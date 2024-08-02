import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import icons from '../../constants/icons'

function CondoTimeInfo1() {
  return (
    <View style={styles.infoSection}>
        <View style={styles.infoItem}><Image style={{ width: 22, height: 24 }} source={icons.calendar} /><Text style={styles.infoSubTilte}>Lunes, 13 de mayo 2024</Text></View>
        <View style={styles.infoItem}><Image style={styles.infoIcon} source={icons.clock} /><Text style={styles.infoSubTilte}>1:00 PM - 6:00 PM</Text></View>
    </View>
  )
}
const styles = StyleSheet.create({
    infoSection: {
        borderTopColor: COLORS.gray,
        borderTopWidth: .3,
        borderBlockColor: COLORS.gray,
        borderBottomWidth: .3,
        paddingVertical: SIZES.large,
        marginVertical: SIZES.large,
        gap: SIZES.medium
    },
    infoItem: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },
    infoIcon: {
        width: 22,
        height: 22
    },
    infoSubTilte: {
        color: COLORS.gray2,
        fontSize: SIZES.medium
    },
})

export default CondoTimeInfo1