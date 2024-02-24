import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

const Enquiry = () => {
  return (
    <View style={{marginHorizontal: 22, marginTop: 20}}>
      <Text
        style={{
          fontSize: 25,
          color: '#0f0352',
          fontWeight: 'bold',
          marginTop: 20,
          textDecorationLine: 'underline',
          marginBottom: 50,
        }}>
        Enquiry
      </Text>
      <Text style={{color: '#000', fontSize: 15}}>
        If you have any questions and doubts regarding our products dont
        hesitate to ask us below. our executives will answer you shortly.
      </Text>
      <Image
        style={{
          height: 25,
          width: 25,
          position: 'absolute',
          left: 290,
          top: 190,
        }}
        source={require('../../src/images/search1.png')}
      />
      <TextInput
        placeholder="Ask ur Question"
        style={{padding: 10, borderWidth: 0.5, borderRadius: 8, marginTop: 20, width:'90%'}}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          height: '12%',
          width: '30%',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Text style={{color: '#fff', fontSize: 15}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Enquiry;
