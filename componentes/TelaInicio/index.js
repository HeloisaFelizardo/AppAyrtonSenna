import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';

import Foto from '../../assets/foto-capa.jpg';
import Fundo from '../../assets/fundo.jpg';
import estilos from './estilos';

export default function TelaInicio() {
  return (
    <ImageBackground blurRadius={5} source={Fundo} style={estilos.container}>
      <Image source={Foto} style={estilos.imgCapa} />

      <View style={estilos.boxDetalhes}>
        <Text style={estilos.titulo}>Ayrton Senna</Text>
        <Text style={estilos.paragrafo}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
      </View>
    </ImageBackground>
  );
}