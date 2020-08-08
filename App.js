import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CharactersScreen from './components/CharactersScreen'
import ProfileScreen from './components/ProfileScreen'

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
          name="Profile"
          component={ProfileScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
