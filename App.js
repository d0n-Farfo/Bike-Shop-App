import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import login from './screens/login';
import home from './screens/home';
import cartlist from './screens/cartlist';



export default function App() {
    const mainNavigator = createStackNavigator();
 
  return (
    <View style ={{flex: 1}}> 
        <NavigationContainer>
          <mainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName="login">
              <mainNavigator.Screen name="login" component ={login} />
              <mainNavigator.Screen name="home" component ={home} />
              <mainNavigator.Screen name="cartlist" component ={cartlist} />

          </mainNavigator.Navigator>
        </NavigationContainer>
    </View>
  );
}


