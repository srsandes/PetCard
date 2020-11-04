import React from 'react';

import {View, FlatList, Vibration} from 'react-native';
import logo from '../../assets/logo.png';
import {FontAwesome5} from '@expo/vector-icons';

import {Container, Title, NomePet, Image, Voltar, ContainerLista} from './styles';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';


const PassearPet: React.FC = () => {
    const navigation = useNavigation();

    function handleVoltar(){
        navigation.goBack();
    }

    const ListPet = [
        {
            id: 1,
            hour: '08:35',
        },
        {
            id: 2,
            hour: '18:20',
        },
        {
            id: 3,
            hour: '21:00',
        }
    ]
    

    return (
        <Container>
            <Voltar onPress={handleVoltar}>
            <FontAwesome5 name='long-arrow-alt-left' size={45} color="#163B39"/>
            </Voltar>

            <Image source={logo}/>

            <View>
                <Title>Passeios com o pet</Title>
            </View>

            <FlatList
                data={ListPet}
                keyExtractor={pet => pet.hour}
                renderItem={({item: pet}) => (
                <ContainerLista>
                <NomePet>Passear com o Pet às: {pet.hour}</NomePet>
                <FontAwesome5 name='clock' size={25} color="#163B39"/>
                </ContainerLista>
                )}
            />

            <Button onPress={() => Vibration.vibrate([1 * 1000, 2 * 1000, 3 * 1000])}>Vibrar</Button>

        </Container>
    )
}

export default PassearPet;