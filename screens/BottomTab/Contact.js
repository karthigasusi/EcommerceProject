import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const Contact = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{marginHorizontal: 22}}>
        <Text style={styles.hdrtxt}>Contact</Text>
        <Text style={styles.txt}>
          For any other queries you can contact our executives.
        </Text>
        <Text style={styles.subheading}>Owner:</Text>
        <Text style={styles.txt}>1. R.Veerakaleeswara Maruthu M.S(IT)</Text>
        <Text style={styles.txt}>mobile: 9962294894</Text>
        <Image
          style={styles.image}
          source={require('../../src/images/maruthu.jpg')}
        />
        <Text style={styles.subheading}>CEO:</Text>
        <Text style={styles.txt}>1. R.Veerakaleeswara Maruthu M.S(IT)</Text>
        <Text style={styles.txt}>mobile: 9962294894</Text>
        <Image
          style={styles.image}
          source={require('../../src/images/maruthu.jpg')}
        />
        <Text style={styles.subheading}>Managing Director:</Text>
        <Text style={styles.txt}>1. R.Veerakaleeswara Maruthu M.S(IT)</Text>
        <Text style={styles.txt}>mobile: 9962294894</Text>
        <Image
          style={styles.image}
          source={require('../../src/images/maruthu.jpg')}
        />
        <Text
          style={styles.subheading}>
          Salesman:
        </Text>
        <Text style={styles.txt}>1. R.Veerakaleeswara Maruthu M.S(IT)</Text>
        <Text style={styles.txt}>mobile: 9962294894</Text>
        <Image
          style={styles.image}
          source={require('../../src/images/maruthu.jpg')}
        />
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  hdrtxt: {
    fontSize: 25,
    color: '#0f0352',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  txt: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subheading: {
    color: 'rgb(216,78,80)',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginTop: 20,
  },
});
