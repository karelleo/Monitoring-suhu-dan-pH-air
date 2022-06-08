import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const RestaurantCard = ({ info }) => {
  const { ph, suhuair, hum, tempe, testing, date} = info;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyleg}>pH</Text>
          <Text style={styles.titleStyleph}>{ph}</Text>
        </View>
      </View>
      
      <View style={styles.cardContainer}>
        <View style={styles.infoStyle}>
        <Text style={styles.titleStyleg}>Suhu Air</Text>
          <Text style={styles.titleStylesuhuair}>{suhuair}</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.infoStyle}>
        <Text style={styles.titleStyleg}>Keterangan</Text>
        <Text style={styles.titleStyletesting}>"{testing}"</Text>
        </View>
      </View>

    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 30;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: 'limegreen',
    height: 200,
    marginTop: 25,
    marginBottom: 10,
    borderRadius: radius,

    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  titleStyle: {
    fontSize: 70,
    fontWeight: '900',
    textAlign: "center",
    marginTop: 10,
    color : 'indigo'
  },
  titleStyleph: {
    fontSize: 70,
    fontWeight: '900',
    textAlign: "center",
    marginTop: 10,
    color : 'blue'
  },
  titleStylesuhuair: {
    fontSize: 70,
    fontWeight: '900',
    textAlign: "center",
    marginTop: 10,
    color : 'red'
  },
  titleStylehum: {
    fontSize: 70,
    fontWeight: '900',
    textAlign: "center",
    marginTop: 10,
    color : 'black'
  },
  titleStyletempe: {
    fontSize: 70,
    fontWeight: '900',
    textAlign: "center",
    marginTop: 10,
    color : 'midnightblue'
  },
  titleStyleg: {
    fontSize: 40,
    fontWeight: '800',
    textAlign: "center",
    marginTop: 20,
    color: 'white'
  },

  titleStyletesting: {
    fontSize: 25,
    fontWeight: '800',
    textAlign: "center",
    marginTop: 20,
    color: 'indigo'
  },

  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default RestaurantCard;
