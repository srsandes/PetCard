import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PassearPet from '../pages/PassearPet';
import AlimentarPet from '../pages/AlimentarPet';

const App = createBottomTabNavigator();

const TabsRoutes: React.FC = () => (
  <App.Navigator 
  tabBarOptions={{
    activeTintColor: '#ff9000',
    inactiveTintColor: '#503D77',
  }}>
    <App.Screen 
    name="AlimentarPet" 
    component={AlimentarPet} 
    options={{
        tabBarLabel: 'Alimentar',
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="bone" size={25} color={color} />
        ),
      }} />
    <App.Screen 
    name="PassearPet"
    component={PassearPet}
    options={{
      tabBarLabel: 'Passear',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="dog" size={25} color={color} />
      ),
    }}
    />
    
  </App.Navigator>
);

export default TabsRoutes;
