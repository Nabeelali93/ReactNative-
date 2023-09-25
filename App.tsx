import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './components/Homepage';
import Slider from './components/Slider';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
       <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name='Todo' component={Homepage} />
        <Stack.Screen name="Slider" component={Slider} />
      </Stack.Navigator>
    </NavigationContainer>



    </>
  )
}