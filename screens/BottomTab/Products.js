import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Button,
} from 'react-native';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../Redux/cartReducer';
import { ProductItems } from '../Data';


const Products = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(ProductItems);

  const handleSearch = query => {
    const filteredItems = ProductItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredData(filteredItems);
    setSearchQuery(query);
  };

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 5,
          marginTop: 20,
        }}>
        <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Image
          style={{
            height: 150,
            width: 150,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
          source={item.image}
        />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          விலை : ₹{item.price}
        </Text>
        <Button title="Add To Cart" onPress={() => addItemToCart(item)} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 25,
          color: '#0f0352',
          fontWeight: 'bold',
          marginHorizontal: 22,
          marginTop: 20,
          textDecorationLine: 'underline',
        }}>
        Products
      </Text>
      <Image
        style={{
          height: 25,
          width: 25,
          position: 'absolute',
          left: 330,
          top: 85,
        }}
        source={require('../../src/images/search1.png')}
      />
      <TextInput
        placeholder="Search"
        style={{
          padding: 10,
          borderWidth: 0.5,
          marginHorizontal: 22,
          borderRadius: 8,
          marginTop: 20,
        }}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Products;
