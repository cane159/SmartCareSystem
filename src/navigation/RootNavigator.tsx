import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import AddRequestScreen from '../screens/AddRequestScreen';
import RequestDetailScreen from '../screens/RequestDetailScreen';
import { RootStackParamList } from './types';

const Root = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Root.Screen name="Login" component={LoginScreen} />
        <Root.Screen name="Main" component={MainScreen} />
        <Root.Screen name="AddRequest" component={AddRequestScreen} />
        <Root.Screen name="RequestDetail" component={RequestDetailScreen} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
