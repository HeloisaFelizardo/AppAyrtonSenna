import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5  } from '@expo/vector-icons';

import TelaInicio from './componentes/TelaInicio/';
import TelaVitorias from './componentes/TelaVitorias/';
import TelaSobre from './componentes/TelaSobre/';

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator screenOptions={{
        headerStyle:{ backgroundColor: '#eecb01' },
        headerTitleStyle: { color: '#000', fontWeight: 'bold' },

        tabBarActiveTintColor: '#ba171a',
        tabBarInactiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#fff",
        tabBarStyle: { backgroundColor: "#eecb01"},
      }}>
        <Abas.Screen
          name="Início"
          component = { TelaInicio }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={color} size={20} />
            ),
          }}
        />

        <Abas.Screen
          name="Sobre"
          component = { TelaSobre }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="question-circle"  color={color} size={20}/>
            ),
          }}
        />

        <Abas.Screen
          name="Vitórias"
          component = { TelaVitorias }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="trophy" color={color} size={20} />
            ),
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  )
}