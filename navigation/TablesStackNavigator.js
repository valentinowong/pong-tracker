import React from 'react';
import MyTablesScreen from '../screens/MyTablesScreen'
import TableTabNavigator from './TableTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function TablesStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My Tables" component={MyTablesScreen} />
            <Stack.Screen 
                name="TableTabNavigator" 
                component={TableTabNavigator} 
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};