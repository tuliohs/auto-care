import * as React from 'react';
//import Battery from '../../assets/icons/Battery.png';

import {
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

import Header from './Header';
import CardServico from '../../components/Card/CardServico';
import Constants from 'expo-constants';
import { Servicos } from './ServicosItems.js';

import { FAB } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <CardServico
      title={item.title}
      dataCad={item.dataCad}
      km={item.km}
      prox={item.prox}
      icone={item.icone}
    />
  );

  const handleSelect = () => navigation.navigate("Tipo")
  return (
    <View style={styles.container}>
      <Header handle={handleSelect} />
      <FlatList
        data={Servicos}
        renderItem={renderItem}
        style={{
          justifyContents: 'space-between',
          marginTop: 2,
        }}></FlatList>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};
export default HomeScreen;

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
  logo: {
    height: 40,
    width: 40,
  },
});