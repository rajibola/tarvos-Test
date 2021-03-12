/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import Checkout from './src/screens/checkout';
import Details from './src/screens/details';
import Home from './src/screens/home';
import {AppProvider} from './src/context/context';
import {
  createSharedElementStackNavigator,
  SharedElementsComponentConfig,
} from 'react-navigation-shared-element';
import {NavigationParamList} from './src/types/types.d';
import {StackNavigationOptions} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const SharedConfig: SharedElementsComponentConfig = (route) => {
  const {id} = route.params;
  return [
    {
      id: `item.${id}.icon`,
      animation: 'move',
    },
  ];
};

const options: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
  gestureEnabled: false,
};

const Stack = createSharedElementStackNavigator<NavigationParamList>();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={options}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen
            name="Details"
            component={Details}
            sharedElementsConfig={SharedConfig}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
