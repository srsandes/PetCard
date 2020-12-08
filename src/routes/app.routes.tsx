import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import CadastroUsuario from '../pages/CadastroUsuario';
import TelaPrincipal from '../pages/TelaPrincipal';
import CadastrarPet from '../pages/CadastrarPet';
import ListaPets from '../pages/ListaPets';
import DadosPet from '../pages/DadosPet';

import TabsRout from './tabs.routes';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    
    <App.Screen name="Login" component={Login} />
    <App.Screen name="CadastroUsuario" component={CadastroUsuario} />
    <App.Screen name="TelaPrincipal" component={TelaPrincipal} />
    <App.Screen name="Atividades" component={TabsRout} />

    
    <App.Screen name="DadosPet" component={DadosPet} />
    
    <App.Screen name="ListaPets" component={ListaPets} />
    <App.Screen name="CadastrarPet" component={CadastrarPet} />
    
    
  </App.Navigator>
);

export default AppRoutes;
