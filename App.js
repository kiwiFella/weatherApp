import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name={'Current'} component={CurrentWeather} />
            <Tab.Screen name={'Forecast'} component={UpcomingWeather} />
            <Tab.Screen name={'City'} component={City} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ccc',
  }
})

export default App
