import React from 'react';
import { Button, View, Text } from 'react-native';

export default function MyTablesScreen( {navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>My Tables Screen</Text>
            <Button
                title="My Table 1"
                onPress={() => navigation.navigate('TableTabNavigator')}
            />
        </View>
    );
};