import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { TheniStore, MaduraiStore, KodaiStore, HosurStore, DindugalStore, ChennaiStore } from '../Data';


const NearestStore = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const renderContent = () => {
    if (selectedValue === 'Theni') {
      return (
        <View style={{ height:500}}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={TheniStore}
          renderItem={({item}) => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 10,
                borderRadius: 6,
                backgroundColor: '#d7b38c',
                padding: 10,
              }}>
              <View style={{margin: 10, flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 20}}>
                  {item.id}.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'blue',
                    fontSize: 20,
                    textDecorationLine: 'underline',
                  }}>
                  {item.name}
                </Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'yellow',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                  }}>
                  Address:{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                    lineHeight: 25,
                  }}>
                  {item.address}
                </Text>
              </View>
            </View>
          )}
        />
        </View>
      );
    } else if (selectedValue === 'Chennai') {
      return (
        <View style={{height:500,}}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={ChennaiStore}
          renderItem={({item}) => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 10,
                borderRadius: 6,
                backgroundColor: '#d7b38c',
                padding: 10,
              }}>
              <View style={{margin: 10, flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 20}}>
                  {item.id}.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'blue',
                    fontSize: 20,
                    textDecorationLine: 'underline',
                  }}>
                  {item.name}
                </Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'yellow',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                  }}>
                  Address:{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                    lineHeight: 25,
                  }}>
                  {item.address}
                </Text>
              </View>
            </View>
          )}
        />
        </View>
      );
    } else if (selectedValue === 'Madurai') {
      return (
        <View style={{height:500,}}>
        <FlatList
          data={MaduraiStore}
          renderItem={({item}) => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 10,
                borderRadius: 6,
                backgroundColor: '#d7b38c',
                padding: 10,
              }}>
              <View style={{margin: 10, flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 20}}>
                  {item.id}.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'blue',
                    fontSize: 20,
                    textDecorationLine: 'underline',
                  }}>
                  {item.name}
                </Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'yellow',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                  }}>
                  Address:{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                    lineHeight: 25,
                  }}>
                  {item.address}
                </Text>
              </View>
            </View>
          )}
        />
        </View>
      );
    } else if (selectedValue === 'Hosur') {
      return (
        <View style={{height:500,}}>
        <FlatList
          data={HosurStore}
          renderItem={({item}) => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 10,
                borderRadius: 6,
                backgroundColor: '#d7b38c',
                padding: 10,
              }}>
              <View style={{margin: 10, flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 20}}>
                  {item.id}.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'blue',
                    fontSize: 20,
                    textDecorationLine: 'underline',
                  }}>
                  {item.name}
                </Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'yellow',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                  }}>
                  Address:{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                    lineHeight: 25,
                  }}>
                  {item.address}
                </Text>
              </View>
            </View>
          )}
        />
        </View>
      );
    } else if (selectedValue === 'Kodaikanal') {
      return (
        <View style={{height:500,}}>
        <FlatList
          data={KodaiStore}
          renderItem={({item}) => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 10,
                borderRadius: 6,
                backgroundColor: '#d7b38c',
                padding: 10,
              }}>
              <View style={{margin: 10, flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 20}}>
                  {item.id}.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'blue',
                    fontSize: 20,
                    textDecorationLine: 'underline',
                  }}>
                  {item.name}
                </Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'yellow',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                  }}>
                  Address:{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                    lineHeight: 25,
                  }}>
                  {item.address}
                </Text>
              </View>
            </View>
          )}
        />
        </View>
      );
    } else if (selectedValue === 'Dindugal') {
      return (
        <View style={{height:500,}}>
        <FlatList
          data={DindugalStore}
          renderItem={({item}) => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 10,
                borderRadius: 6,
                backgroundColor: '#d7b38c',
                padding: 10,
              }}>
              <View style={{margin: 10, flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 20}}>
                  {item.id}.
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'blue',
                    fontSize: 20,
                    textDecorationLine: 'underline',
                  }}>
                  {item.name}
                </Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'yellow',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                  }}>
                  Address:{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: '#fff',
                    marginLeft: 20,
                    marginTop: 5,
                    fontSize: 15,
                    lineHeight: 25,
                  }}>
                  {item.address}
                </Text>
              </View>
            </View>
          )}
        />
        </View>
      );
    } else {
      return (
        <Text
          style={{
            marginLeft: 10,
            color: '#000',
            fontSize: 15,
            fontWeight: '400',
            marginTop: 20,
            lineHeight: 25,
          }}>
          Based on your current location we will suggest the nearest store where
          you can buy our products.
        </Text>
      );
    }
  };

  return (
    <View style={{marginHorizontal: 22}}>
      <Text style={{color: '#000', fontWeight: 'bold', marginTop: 30}}>
        Select your Location from below*
      </Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={itemValue => setSelectedValue(itemValue)}
        style={{
          height: 50,
          width: 300,
          marginTop: 10,
          alignItems: 'center',
          borderWidth: 1,
        }}>
        <Picker.Item label="Select an option..." value={null} />
        <Picker.Item label="Theni" value="Theni" />
        <Picker.Item label="Madurai" value="Madurai" />
        <Picker.Item label="Chennai" value="Chennai" />
        <Picker.Item label="Dindugal" value="Dindugal" />
        <Picker.Item label="Kodaikanal" value="Kodaikanal" />
        <Picker.Item label="Hosur" value="Hosur" />
      </Picker>
      <View style={{marginTop: 10, marginHorizontal: 10}}>
        {renderContent()}
      </View>
    </View>
  );
};

export default NearestStore;