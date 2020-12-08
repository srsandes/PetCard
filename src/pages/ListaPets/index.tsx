import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore'; 

import {View, FlatList} from 'react-native';
import logo from '../../assets/logo.png';
import {FontAwesome5} from '@expo/vector-icons';

import {Container, Title, NomePet, Image, Voltar, ContainerBotao} from './styles';
import { useNavigation } from '@react-navigation/native';

type Pets = Array<{
    nome_do_pet:string; 
    especie: string; 
    raca: string; 
    sexo: string; 
    cor: string; 
    dt_nascimento: string; 
    observacao: string;
  }>;


const ListaPet: React.FC = () => {
    const navigation = useNavigation();
    const db = firebase.firestore();
    const [listaPet, setListaPet] = useState<Pets>([]);

    function handleVoltar(){
        navigation.goBack();
    }

    function handleDadosPet(index: number){
        const pet = listaPet[index];
        navigation.navigate('DadosPet', { pet: pet });
    }

    useEffect(() => {
        async function test(){
           await db.collection('pets').doc(firebase.auth().currentUser?.uid).get().then(resultado =>{
                if(resultado.exists){
                    const pets: Pets = resultado.data()?.lista;
                    setListaPet(pets);
                }
            })
        }
        test();
        
    }, [db, firebase])
    

    return (
        <Container>
            <Voltar onPress={handleVoltar}>
            <FontAwesome5 name='long-arrow-alt-left' size={45} color="#163B39"/>
            </Voltar>

            <Image source={logo}/>

            <View>
                <Title>Seus pet's</Title>
            </View>

            <FlatList
                data={listaPet}
                keyExtractor={pet => pet.nome_do_pet}
                renderItem={({item: pet, index}) => (
                <ContainerBotao onPress={() => handleDadosPet(index)}>
                <NomePet>{pet.nome_do_pet}</NomePet>
                </ContainerBotao>
                )}
            />

            

        </Container>
    )
}

export default ListaPet;