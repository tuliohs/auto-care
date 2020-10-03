import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';

export default function CardServico({ title, dataCad, km, prox, icone }) {

  //Base para o formulario
  const BaseForm = ({ label, text }) => (
    <View  style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContents: 'space-between',
          color: '#a9a9a9'          
        }}>
      <Text>{label}</Text>
      <Text style={{
    fontWeight: 'bold',
        }}>{text}</Text>
    </View>
  );

  return (
    <Card style={styles.card}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContents: 'space-between',
        }}>
        <Image style={styles.logo} source={icone} />
        <View>
          <Title>{title}</Title>
          <BaseForm label='Realizado em ' text={dataCad} />
          <BaseForm label='com ' text={km} />
          <BaseForm label='Próxima troca ' text={prox} />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 40,
          alignItems: 'flex-start',
    width: 40,
  },
  card:{
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#DCDCDC',
    lineHeight: 1,
    marginTop: 1,
    padding: 1,
  }
});
