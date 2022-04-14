import React from 'react';
import { Button } from 'react-native'
import TableGamesScreen from '../screens/TableGamesScreen';
import NewGameScreen from '../screens/NewGameScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function TablesGamesNavigator( {navigation} ) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Games" 
                component={TableGamesScreen}
                options={{
                    headerRight: () => (
                      <Button
                        onPress={() => navigation.navigate('New Game')}
                        title="+"
                      />
                    ),
                  }}
            />
            <Stack.Screen 
              name="New Game" 
              component={NewGameScreen}
              options={{
                headerRight: () => (
                  <Button
                    // onPress={() => (navigation.navigate('New Game'))}
                    title="Save"
                  />
                ),
              }}
            />
        </Stack.Navigator>
    );
};