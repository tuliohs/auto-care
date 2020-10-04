import * as React from 'react';
//import Battery from '../../assets/icons/Battery.png';

import { AntDesign } from '@expo/vector-icons';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Text
} from 'react-native';
import Constants from 'expo-constants';
import Header from '../../components/Header'

const Modelos = [
    { id: 1, name: "Hb 20", action: { route: "Confirmacao" } },
    { id: 2, name: "Palio", action: { route: "Confirmacao" } },
    { id: 3, name: "Uno", action: { route: "Confirmacao" } },
]
const Modelo = ({ navigation }) => {

    //Render do FlatList
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate(item.action.route) }}>
            <Text style={{ fontSize: 22 }}>{item.name}</Text>
            <AntDesign name="rightcircle" size={24} color="black"
                style={{ alignItems: "right", marginLeft: "Auto", marginRight: 3 }} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header hideEdit={true} nav={navigation} />
            <FlatList
                data={Modelos}
                renderItem={renderItem}
                style={{
                    justifyContents: 'space-between',
                    marginTop: 2,
                }}></FlatList>
        </View>
    );
};
export default Modelo;

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