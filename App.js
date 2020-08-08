import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CharactersScreen from './components/CharactersScreen'
import DetailScreen from './components/DetailScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}

        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
