import React from 'react';
import { Button } from 'react-native'
import MyTablesScreen from '../screens/MyTablesScreen'
import NewTableScreen from '../screens/NewTableScreen';
import TableTabNavigator from './TableTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function TablesStackNavigator( {navigation} ) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="My Tables"
                component={MyTablesScreen}
                options={{
                    headerRight: () => (
                      <Button
                        onPress={() => navigation.navigate('New Table')}
                        title="+"
                      />
                    ),
                  }}
            />
            <Stack.Screen 
                name="TableTabNavigator" 
                component={TableTabNavigator} 
                options={{ 
                    title: "",
                    // headerShown: false,
                }}
            />
            <Stack.Screen 
                name="New Table"
                component={NewTableScreen}
                options={{
                    headerRight: () => (
                        <Button
                        // onPress={() => (navigation.navigate('New Table'))}
                        title="Save"
                      />
                    ),
                  }}
            />
        </Stack.Navigator>
    );
};