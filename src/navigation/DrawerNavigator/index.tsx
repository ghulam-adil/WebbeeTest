import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashboardScreen from '../../screens/DashboardScreen';
import CategoryScreen from '../../screens/CategoryScreen';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const categories = useSelector(state => state.general.categories)

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={DashboardScreen} />
            {categories && categories.map((category) => (
                <Drawer.Screen
                    key={category.id}
                    name={category.id as keyof DrawerRoutes}
                    component={ItemScreen}
                    initialParams={{
                        categoryId: category.id,
                    }}
                    options={{
                        title: category.title,
                    }}
                />
            ))}
            <Drawer.Screen name="Categories" component={CategoryScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
