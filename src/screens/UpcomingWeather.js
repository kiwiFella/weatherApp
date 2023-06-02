import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, FlatList, StatusBar, ImageBackground } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
import ListItem from '../components/ListItem'

const DATA = [
    {
        dt_text: '2023-02-18 12:00:00',
        main: {
            temp_max: 18.55,
            temp_min: 11.22
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_text: "2023-02-19 12:00:00",
        main: {
            temp_max: 19.55,
            temp_min: 12.22
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_text: "2023-02-20 12:00:00",
        main: {
            temp_max: 20.55,
            temp_min: 13.22
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]



const UpcomingWeather = () => {
  const renderItem = ({item}) => (
      <ListItem condition={item.weather[0].main} dt_text={item.dt_text}  max={item.main.temp_max} min={item.main.temp_min} />
  )
  return (
    // <SafeAreaView style={styles.wrapper}>
      <ImageBackground style={styles.background} source={require('../../assets/img/upcomingWeatherBackground.jpg')} >
        <View style={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={ DATA }
                renderItem={ renderItem }
                keyExtractor = {(item) => item.dt_text}
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
