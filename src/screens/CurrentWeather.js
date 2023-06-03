import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { weatherType } from '../utilities/WeatherTypes'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons name={weatherType['Thunderstorm'].icon} style={styles.icon} />
        <Text style={styles.current}>Current Weather</Text>
        <Text style={styles.temp}>21°</Text>
        <Text style={styles.feels}>Feels like 19°</Text>
        <Text style={styles.highlow}>High: 22° | Low: 15°</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.description}>It&apos;s Sunny</Text>
        <Text style={styles.message}>{weatherType['Thunderstorm'].message}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 100,
    marginBottom: 20
  },
  currrent: {
    fontSize: 30
  },
  temp: {
    fontSize: 50,
    padding: 20
  },
  feels: {
    fontSize: 30
  },
  highlow: {
    fontSize: 25,
    paddingTop: 10
  },
  textWrapper: {
    paddingTop:20,
    justifyContent: 'flex-end',
    textAlign: 'flex-start',
    margin: 20
  },
  description: {
    fontSize: 30
  },
  message: {
    fontSize: 25
  }
})
export default CurrentWeather
