import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Share,
} from 'react-native';

const data = [
  {id: 1, code: '#ABC1213', bgColor: '#FA0000'},
  {id: 2, code: '#XAD1734', bgColor: '#EDFE10'},
  {id: 3, code: '#KSF4864', bgColor: '#029FF1'},
  {id: 4, code: '#TEI7234', bgColor: '#029029'},
];
const Offers = () => {
  const Sharething = async () => {
    const shareOptions = {
      message: 'Hello from my app!',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{marginHorizontal: 22, margin: 10}}>
      <Text
        style={{
          fontSize: 25,
          color: '#0f0352',
          fontWeight: 'bold',
          marginTop: 20,
          textDecorationLine: 'underline',
          marginBottom: 10,
        }}>
        Coupon Codes
      </Text>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
        You can avail various offers based on coupon codes and ScratchCards etc.
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="Enter Coupon code"
          style={{
            padding: 10,
            height: '50%',
            borderWidth: 0.5,
            borderRadius: 8,
            marginTop: 20,
            width: '80%',
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: '15%',
            borderRadius: 4,
            marginTop: 10,
            alignItems: 'center',
            height: '50%',
            marginTop: 20,
            marginLeft: 5,
          }}>
          <Text style={{color: '#fff', marginTop: 5}}>Enter</Text>
        </TouchableOpacity>
      </View>
      {/* Coupons  */}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              borderWidth: 0.5,
              marginTop: 20,
              padding: 10,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <View>
                <Text style={{fontWeight: 'bold', color: '#000'}}>
                  Coupon code:{' '}
                </Text>
                <Text
                  style={{
                    color: '#000',
                    backgroundColor: item.bgColor,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    width: 100,
                    marginTop: 5,
                  }}>
                  {item.code}
                </Text>
              </View>
              <TouchableOpacity
                onPress={Sharething}
                style={{
                  backgroundColor: 'blue',
                  borderWidth: 0.5,
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 1,
                  marginRight: 10,
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Share</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 1}}>
              <Text style={{color: '#000'}}>
                By using this coupon you can avail upto 15% offer on our
                products
              </Text>
              <Text style={{fontSize: 10, marginTop: 10, marginBottom: -10}}>
                *terms and conditions apply
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Offers;
