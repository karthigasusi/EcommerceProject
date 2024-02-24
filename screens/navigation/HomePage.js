import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../BottomTab/Home';
import Products from '../BottomTab/Products';
import Contact from '../BottomTab/Contact';
import CartPage from '../cart';
import NearestStore from '../BottomTab/nearestStore';

const Tab = createBottomTabNavigator();

const HomePage = () => (    
  <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#ffffff', height: 80, borderRadius: 10, paddingBottom:10, zIndex:1,},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  marginLeft: 3,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../src/images/Home.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  marginLeft: 15,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../src/images/Products.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                Products
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NearestStore"
        component={NearestStore}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  marginLeft: 5,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../src/images/search1.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                Stores
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../src/images/cart.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                Cart
              </Text>
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{
                  marginLeft: 15,
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
                source={require('../../src/images/Contact.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: focused ? '#e32f45' : '#748c94',
                }}>
                Conatct
              </Text>
            </View>
          ),
        }}
      />
          
         
    </Tab.Navigator>

  );

  export default HomePage;