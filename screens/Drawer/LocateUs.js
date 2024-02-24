import React from "react";
import {View, Text, Alert} from 'react-native';
import MapView from "react-native-maps";


const LocateUs = () => {
    return (
      <View style={{flex:1, marginHorizontal:22, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:25, color:'#0f0352', fontWeight:'bold', marginHorizontal:22, marginTop:20, textDecorationLine:'underline', marginBottom:50,}}>Location</Text>
    
      <Text style={{ fontSize:15, marginBottom:20 }}>You can access the location of our outlets from the below map. You can set direction and easilt access our location</Text>
      <MapView
        style={{height:400, width:400}}
        zoomEnabled={true}
        scrollEnabled={true}>  
      </MapView>
    </View>

    );
  };

export default LocateUs;