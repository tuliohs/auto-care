import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/Home/HomeScreen'
import Tipo from './pages/Veiculo/Tipo'
import Marca from './pages/Veiculo/Marca'
import Modelo from './pages/Veiculo/Modelo'
import Confirmacao from './pages/Veiculo/Confirmacao'


const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName="Confirmacao">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tipo" component={Tipo} />
            <Stack.Screen name="Marca" component={Marca} />
            <Stack.Screen name="Modelo" component={Modelo} />
            <Stack.Screen name="Confirmacao" component={Confirmacao} />
        </Stack.Navigator>
    )
}
export default MyStack;