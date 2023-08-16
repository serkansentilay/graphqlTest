import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Countries from './screens/Countries';
import States from './screens/States';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Countries" component={Countries} />
                <Stack.Screen name="States" component={States} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
