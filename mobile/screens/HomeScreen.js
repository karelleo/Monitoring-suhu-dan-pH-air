import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Image } from 'react-native';
import { useState, useEffect } from "react";
import axios from "axios";
import Card from '../komponen/LineChart';
import Header from '../komponen/Header';


const HomeScreen = () => {
  
  const [dhtmobile, setDht] = useState([])
  useEffect(()=>{
    async function getAllDhtmobile11(){
    try {
      const dhtmobile = await axios.get('http://192.168.1.22:5000/dht11/mobile')
      console.log(dhtmobile.data)
      setDht(dhtmobile.data)
    } catch (error) {
      console.log(error)
    }
    }
    getAllDhtmobile11()
  }, [])
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header 
      label="Sistem Hidroponik" />
      <Image source={{uri:'https://i.ibb.co/cLqJNZH/HIDROPONIK-KRL.png'}}
       style={{width: 100, height: 100}} />
      <FlatList
        data={dhtmobile}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(dhtmobile) => dhtmobile.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeScreen;
