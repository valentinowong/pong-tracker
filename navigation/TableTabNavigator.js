import React from 'react';
import TableStatsScreen from '../screens/TableStatsScreen';
import TableLineScreen from '../screens/TableLineScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TableTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Table Stats" 
                component={TableStatsScreen}
            />
            <Tab.Screen 
                name="Table Line" 
                component={TableLineScreen}
            />
        </Tab.Navigator>
    );
};