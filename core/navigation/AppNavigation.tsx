import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DocumentSdkScreen from '../screens/DocumentSdkScreen';
import FaceSdkScreen from '../screens/FaceSdkScreen';
import HomeScreen from '../screens/HomeScreen';
import RegulaScreen from '../screens/RegulaScreen';
import { NavigationContainer } from '@react-navigation/native';
// Define types for the navigator
export type AppStackParamList = {
   Home: undefined;
  DocumentSdk: undefined;
  FaceSdk: undefined;
  Regula: undefined;
  
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DocumentSdk" component={DocumentSdkScreen} />
      <Stack.Screen name="FaceSdk" component={FaceSdkScreen} />
      <Stack.Screen name="Regula" component={RegulaScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
