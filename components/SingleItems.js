import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SingleItems = ({item}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.imageContainer}>
        <Image 
        style={styles.image}
        source = {{uri: item.image }}
        />
        {<Text style = {styles.symbol}>{item.symbol}</Text>}
      </View>

      <View style = {styles.description}>
        <Text style = {styles.text}>Name: {item.name}</Text>
        <Text style = {styles.text}>Price: {item.current_price}</Text>
        <Text style = {styles.text}>Volume: {item.total_volume}</Text>
        <Text style = {styles.text}>PriceChange: {item.price_change_24h}</Text>
        <Text style = {styles.text}>Last Updated: {item.last_updated}</Text>
      </View>
    </View>
  )
}

export default SingleItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    marginBottom: 10,
    marginHorizontal: 10,
    height: 160,
    borderRadius: 20,
  },

  imageContainer:{
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    height: '100%',
    width: '100%',
  },

  symbol:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
  },

  description:{
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  text:{
    paddingBottom: 5,
    fontSize: 15,
  }


})