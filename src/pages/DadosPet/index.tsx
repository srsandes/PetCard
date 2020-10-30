import React from 'react';

import {View} from 'react-native';
import logo from '../../assets/logo.png';
import {FontAwesome5} from '@expo/vector-icons';

import {Container, Title, NomePet, Image, Voltar, TextoInfo} from './styles';
import { useNavigation } from '@react-navigation/native';


const DadosPet: React.FC = () => {
    const navigation = useNavigation();

    function handleVoltar(){
        navigation.goBack();
    }
    

    return (
        <Container>
            <Voltar onPress={handleVoltar}>
            <FontAwesome5 name='long-arrow-alt-left' size={45} color="#163B39"/>
            </Voltar>

            <Image source={logo}/>

            <View>
                <Title>Seus pet's</Title>
            </View>

            <NomePet>Nome: Roberval</NomePet>
                <TextoInfo>Vacina: Anterábica</TextoInfo>
                <TextoInfo>Responsável: Maçã delas</TextoInfo>
                <TextoInfo>Data: 20/10/2020</TextoInfo>
                <TextoInfo>Peso: 25Kg</TextoInfo>
                <TextoInfo>Próxima vacina: 30/10/2020</TextoInfo>

            

        </Container>
    )
}

export default DadosPet;