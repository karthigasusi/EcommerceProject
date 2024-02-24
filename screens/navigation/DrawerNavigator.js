import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens
import CustomDrawer from '../Drawer/CustomDrawer';
import Offers from '../Drawer/Offers';
import LocateUs from '../Drawer/LocateUs';
import HomePage from './HomePage';
import About from '../BottomTab/About';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(216, 70, 80)',
          height: 75,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 25,
        },
        headerTitleAlign: 'center',
        drawerActiveTintColor: '#fff',
        headerTitle: 'கிட்டு சேவு',
        drawerActiveBackgroundColor: 'rgb(216, 70, 80)',
      }}>
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="About Us" component={About} />
      <Drawer.Screen name="Locate Us" component={LocateUs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
