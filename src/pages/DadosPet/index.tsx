import React from 'react';

import {View} from 'react-native';
import logo from '../../assets/logo.png';
import {FontAwesome5} from '@expo/vector-icons';

import {Container, Title, NomePet, Image, Voltar, TextoInfo} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

interface RouteParams {
    pet: {
        nome_do_pet:string; 
        especie: string; 
        raca: string; 
        sexo: string; 
        cor: string; 
        dt_nascimento: string; 
        observacao: string;
    }
  }

const DadosPet: React.FC = () => {
    const navigation = useNavigation();
    const { params } = useRoute();

    const routeParams = params as RouteParams;

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

                <NomePet>Nome: {routeParams.pet.nome_do_pet} </NomePet>
                <TextoInfo>Cor: {routeParams.pet.cor}</TextoInfo>
                <TextoInfo>Espécie: {routeParams.pet.especie}</TextoInfo>
                <TextoInfo>Data de nascimento: {routeParams.pet.dt_nascimento}</TextoInfo>
                <TextoInfo>Raça: {routeParams.pet.raca}</TextoInfo>
                <TextoInfo>Observação: {routeParams.pet.observacao}</TextoInfo>
                <TextoInfo>Sexo: {routeParams.pet.sexo}</TextoInfo>

            

        </Container>
    )
}

export default DadosPet;