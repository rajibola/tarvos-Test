/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Checkout from './src/screens/checkout';
import Details from './src/screens/details';
import Home from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import {AppProvider} from './src/types/context';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
