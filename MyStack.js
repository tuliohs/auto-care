import * as React from 'react'
import { NavigatorContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/Home/HomeScreen'

const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <NavigatorContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
            </Stack.Navigator>
        </NavigatorContainer>
    )
}
export default MyStack;