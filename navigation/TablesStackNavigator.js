import React from 'react';
import MyTablesScreen from '../screens/MyTablesScreen'
import TableTabNavigator from './TableTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function TablesStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Table Tab Navigator" 
                component={TableTabNavigator} 
                options={{ headerShown: false }}
            />
            <Stack.Screen name="My Tables" component={MyTablesScreen} />
            {/* <Stack.Screen name="Table" component={TableTabNavigator} /> */}
        </Stack.Navigator>
    );
};