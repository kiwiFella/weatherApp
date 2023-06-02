import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Tabs from './src/components/Tabs'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Tabs />
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
