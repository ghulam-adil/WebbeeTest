import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from '../DrawerNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default MainNavigator;
