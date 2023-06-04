import React from 'react'
import { StyleSheet, View, FlatList, StatusBar, ImageBackground } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
import ListItem from '../components/ListItem'





const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({item}) => (
      <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt}  max={item.main.temp_max} min={item.main.temp_min} />
  )
  return (
    // <SafeAreaView style={styles.wrapper}>
      <ImageBackground style={styles.background} source={require('../../assets/img/upcomingWeatherBackground.jpg')} >
        <View style={styles.container}>
            {/* <Text>Upcoming Weather</Text> */}
            <FlatList
                data={ weatherData }
                renderItem={ renderItem }
                keyExtractor = {(item) => item.dt_txt}
            />
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
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})

export default UpcomingWeather
