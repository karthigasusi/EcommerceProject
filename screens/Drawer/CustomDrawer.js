import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 10, marginLeft: 5}}>
      <Image style={{height:100, width:100, marginLeft:50, marginTop:10, borderRadius:50,}} source={require('../../src/images/sevu.png')}/>
      <Text style={{fontSize:25, marginLeft:35, color:'blue', fontWeight:'bold', marginBottom:20, marginTop:10}}>கிட்டு சேவு</Text>
      
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
