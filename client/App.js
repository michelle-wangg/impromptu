import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen'; 
import LandingScreen from './LandingScreen'; 

const Stack = createStackNavigator();

export default function App() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };

    const navigateToLogin = () => {
        // Define the action to navigate back to the Login screen
        navigation.navigate('Login');
      };
      
  return (
    <NavigationContainer theme={navTheme}>
        {/* screenOptions={{ headerShown: false }} */}
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={LoginScreen} screenOptions={{ headerShown: false }}/>
        <Stack.Screen 
            name="Landing" 
            component={LandingScreen} 
            screenOptions={{ headerShown: false }}
            // func={() => {navigation.navigate('Login');}}
            // () => <LandingScreen navigateToLogin={navigateToLogin}/>
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//  <Button
//                     title="Back to Login"
//                     onPress={() => {
//                     navigation.navigate('Login'); // Navigate to the Login screen
//                     }}
//                 /> 