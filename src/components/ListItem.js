import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ListItem = (props) => {
    const {dt_text, max, min, condition} = props
    return (
        <View style={styles.item}>
            <Ionicons name={'cloud-outline'} style={styles.icon} />
            <Text style={styles.date}>{dt_text}</Text>
            <Text style={styles.temp}>{max}° </Text>
            <Text style={styles.temp}>{min}°</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 50,
        marginBottom: 20
      },
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
      },
      temp: {
        fontSize: 20
      },
      date: {
        fontSize: 15
      }
})
export default ListItem