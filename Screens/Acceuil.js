import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Groups from './AcceuilScreen/Groups';
import ListProfils from './AcceuilScreen/ListProfils';
import MonCompte from './AcceuilScreen/MonCompte';

const Tab = createMaterialBottomTabNavigator();

export default function Acceuil(props) {
  const currentid = props.route.params.currentid;

  return (
    <Tab.Navigator activeColor="#fa8072" inactiveColor="#9e9e9e" >
      <Tab.Screen name="listprofils" component={ListProfils}  initialParams={{currentid: currentid}}></Tab.Screen>
      <Tab.Screen name="groups" component={Groups}  initialParams={{currentid: currentid}}></Tab.Screen>
      <Tab.Screen name="moncompte"component={MonCompte}  initialParams={{currentid: currentid}}></Tab.Screen>
    </Tab.Navigator>
  )
}