import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';

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
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: 8,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    item: {
        padding: "13px",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContents: 'space-between',
        color: '#a9a9a9',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#DCDCDC',
        lineHeight: 1,
        marginTop: 1,
    }
}); 