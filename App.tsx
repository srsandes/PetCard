import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';
import firebaseConfig from './src/config/firebase-config';

import Routes from './src/routes';

firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
    
  );
}