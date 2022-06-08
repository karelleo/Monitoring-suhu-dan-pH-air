import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const Header = ({ label }) => {
  // console.log(label);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    marginTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default Header;
