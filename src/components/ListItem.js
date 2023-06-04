import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'
import { weatherType } from '../utilities/WeatherTypes'


const ListItem = (props) => {
    const {dt_txt, max, min, condition} = props
    return (
        <View style={styles.item}>
            <Ionicons name={weatherType[condition]?.icon} style={styles.icon} />
            <Text style={styles.date}>{moment(dt_txt).format('dddd') + " " + moment(dt_txt).format('h:mm a')}</Text>
            <Text style={styles.temp}>{`${Math.round(max)}°`} </Text>
            <Text style={styles.temp}>{`${Math.round(min)}°`}</Text>
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