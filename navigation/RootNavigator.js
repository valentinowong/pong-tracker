import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TablesStackNavigator from './TablesStackNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Tables" 
                component={TablesStackNavigator} 
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};