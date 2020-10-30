import React from 'react';

import {View, FlatList} from 'react-native';
import logo from '../../assets/logo.png';
import {FontAwesome5} from '@expo/vector-icons';

import {Container, Title, NomePet, Image, Voltar, ContainerBotao} from './styles';
import { useNavigation } from '@react-navigation/native';


const ListaPet: React.FC = () => {
    const navigation = useNavigation();

    function handleVoltar(){
        navigation.goBack();
    }

    function handleDadosPet(){
        navigation.navigate('DadosPet');
    }

    const ListPet = [
        {
            id: 1,
            name: 'Roberval',
        },
        {
            id: 2,
            name: 'Tacy',
        },
        {
            id: 3,
            name: 'Jubileu',
        }
    ]
    

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
                data={ListPet}
                keyExtractor={pet => pet.name}
                renderItem={({item: pet}) => (
                <ContainerBotao onPress={handleDadosPet}>
                <NomePet>{pet.name}</NomePet>
                </ContainerBotao>
                )}
            />

            

        </Container>
    )
}

export default ListaPet;