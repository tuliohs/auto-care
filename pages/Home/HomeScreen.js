import * as React from 'react';
//import Battery from '../../assets/icons/Battery.png';

import {
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import CardServico from '../../components/Card/CardServico';
import Constants from 'expo-constants';
import Logo from '../../assets/Logo.png';
import { Servicos } from './ServicosItems.js';

import { FAB, Title } from 'react-native-paper';

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <CardServico
      title={item.title}
      dataCad={item.dataCad}
      km={item.km}
      prox={item.prox}
      icone={item.icone}
    />
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: '#279B61',
          textAlign: 'center',
        }}>
        <Image style={styles.logo} source={Logo} />
        <Title
          style={{
            marginRight: 'auto',
            flex: 1,
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Auto Care
        </Title>
      </View>
      <View
        style={{
          justifyContents: 'space-between',
          flexDirection: 'row',
          backgroundColor: '#279B61',
          textAlign: 'center',
          marginTop: 2,
        }}>
        <Title
          style={{
            flex: 1,
            justifyContents: 'space-between',
            marginLeft: 5
          }}>
          Manutençã da MT 07
        </Title>
        <Image style={styles.logo} source={Logo} />
      </View>
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

/*const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});*/
