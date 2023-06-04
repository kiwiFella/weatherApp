import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { weatherType } from '../utilities/WeatherTypes'

const CurrentWeather = ({weatherData}) => {
const { main:{ temp, feels_like, temp_max, temp_min}, weather} = weatherData
const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView style={[styles.wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={styles.container}>
        <Ionicons name={weatherType[weatherCondition]?.icon} style={styles.icon} />
        <Text style={styles.current}>Current Weather</Text>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`}°</Text>
        <Text style={styles.highlow}>{`High: ${temp_max}° | Low: ${temp_min}°`}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.description}>{weather[0]?.description}</Text>
        <Text style={styles.message}>{weatherType[weatherCondition]?.message}</Text>
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
