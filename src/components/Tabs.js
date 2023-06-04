import React from 'react'
import { StyleSheet } from 'react-native'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Tabs = ({weather}) => {
  return (

        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey'
          }}
        >
            <Tab.Screen name={'Current'} options={{
              tabBarIcon:({ focused }) => (
                <Ionicons name={'umbrella-sharp'} style={styles.icon} color={focused? 'tomato' : 'grey'} />
              )
            }} >
              {() => <CurrentWeather weatherData ={weather.list[0]} />}
            </Tab.Screen>

            <Tab.Screen name={'Forecast'} options={{
              tabBarIcon:({ focused }) => (
                <Ionicons name={'time-sharp'} style={styles.icon} color={focused? 'tomato' : 'grey'} />
              )
            }} >
              {() => <UpcomingWeather weatherData ={weather.list} />}
            </Tab.Screen>
            <Tab.Screen name={'City'} options={{
              tabBarIcon:({ focused }) => (
                <Ionicons name={'map'} style={styles.icon} color={focused? 'tomato' : 'grey'} />
              )
            }} >
              {() => <City weatherData ={weather.city} />}
            </Tab.Screen>
        </Tab.Navigator>

  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25
  }
})

export default Tabs
