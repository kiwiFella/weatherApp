import React from 'react'
import { StyleSheet } from 'react-native'

import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Tabs = () => {
  return (

        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey'
          }}
        >
            <Tab.Screen name={'Current'} component={CurrentWeather} options={{
              tabBarIcon:({ focused }) => (
                <Ionicons name={'umbrella-sharp'} style={styles.icon} color={focused? 'tomato' : 'grey'} />
              )
            }} />
            <Tab.Screen name={'Forecast'} component={UpcomingWeather} options={{
              tabBarIcon:({ focused }) => (
                <Ionicons name={'time-sharp'} style={styles.icon} color={focused? 'tomato' : 'grey'} />
              )
            }} />
            <Tab.Screen name={'City'} component={City} options={{
              tabBarIcon:({ focused }) => (
                <Ionicons name={'map'} style={styles.icon} color={focused? 'tomato' : 'grey'} />
              )
            }} />
        </Tab.Navigator>

  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25
  }
})

export default Tabs
