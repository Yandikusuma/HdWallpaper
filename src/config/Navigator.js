import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../component/HomeScreen";
import FullCatogeryScreen from "../component/FullScreen"
import ImageDisplay from "../component/ImageDisplay"

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
	initialRouteName={'Home'}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          animationEnabled: false,
        }}
        mode={'card'}>

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown:false
          }}
          />

        <Stack.Screen 
          name="FullCatogery" 
          component={FullCatogeryScreen} 
          options={{
            headerShown:false,
          }}
          />

        <Stack.Screen 
          name="ImageDisplay" 
          component={ImageDisplay} 
          options={{
            headerShown:false,
          }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}