import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

export default App
