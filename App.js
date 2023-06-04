import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, ActivityIndicator  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import ErrorItem from './src/components/ErrorItem'

import { useGetWeather } from './src/hooks/useGetWeather'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()


  if(weather && weather.list && !loading){
    return (
      <SafeAreaView style={styles.wrapper}>
        <NavigationContainer>
          <Tabs weather={weather} />
        </NavigationContainer>
      </SafeAreaView>
    )
  }


    return(
      <View style={styles.activityContainer}>
        {error? (
          <ErrorItem />
        ) : (
          <ActivityIndicator style={styles.activityContainer} size={'large'} color={'tomato'} />
        )}
        
      </View>
    )
  
 
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  activityContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
