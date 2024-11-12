// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AbsensiScreen from '../screens/AbsensiScreen';
import RiwayatScreen from '../screens/RiwayatScreen';
import LogoutScreen from '../screens/LogoutScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Absensi" component={AbsensiScreen} />
      <Stack.Screen name="Riwayat" component={RiwayatScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
