import * as React from 'react';

import {
    View,
    StyleSheet,
    Button,
    Text
} from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/Header'

const Marca = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Header hideEdit={true} nav={navigation} />
            <Text>Tipo:Carro</Text>
            <Text>Marca:Aston</Text>
            <Text>Modelo: HB 20</Text>
            <Button title="Confirmar" onPress={() => navigation.popToTop()} />
        </View>
    );
};
export default Marca;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: 8,
    }
}); 