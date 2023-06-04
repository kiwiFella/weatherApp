import React from 'react'
import { StyleSheet, View, Text, ImageBackground, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'

const City = ({weatherData}) => {

  const {name, country, population, sunrise, sunset} = weatherData

  return (
    // <SafeAreaView style={styles.wrapper}>
      <ImageBackground style={styles.background} source={require('../../assets/img/cityBackground.jpg')} >
        <View style={styles.transparentOverlay}>
          
          <View style={styles.container}>
            <Text style={[styles.city, styles.text]}>{name}</Text>
            <Text style={[styles.country, styles.text]}>{country}</Text>

            <Ionicons style={styles.populationIcon} name="ios-people-outline" size={50} />
            <Text style={[styles.population, styles.text]}>Population:</Text>
            <Text style={[styles.population, styles.text]}>{population}</Text>
            <View style={styles.sunriseset}>
              <Ionicons name="ios-sunny" size={30} />
              <Text style={[styles.sunrisesetText]}> {moment(sunrise).format('h:mm:ss a')} </Text>
              <Ionicons name="ios-moon" size={30} />
              <Text style={[styles.sunrisesetText]}> {moment(sunset).format('h:mm:ss a')} </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  transparentOverlay: {
    flex:1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  populationIcon: {
    marginTop: 30
  },
  population: {
    fontSize: 40
  },
  city: {
    fontSize: 30
  },
  country: {
    fontSize: 30
  },
  text: {
    fontWeight: 'bold',
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunriseset: {
    marginTop:30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginLeft: 5
  },
  sunrisesetText: {
    fontSize: 25,
    fontWeight: 'normal',
    padding: 10
  }
})

export default City
