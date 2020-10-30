import React from 'react';
import {Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/logo.png';
import icon from '../../assets/walking.svg';

import { Container, Logo, Menu, MenuTexto, MenuContainer, Voltar } from './styles';

const TelaPrincipal: React.FC = () => {
    const navigation = useNavigation();

    function handleCadastrarPet() {
        navigation.navigate('CadastrarPet');
    }
    
    function handleListaPets() {
        navigation.navigate('ListaPets');
    }

    function handleAlimentacao(){
        navigation.navigate('Atividades');
    }

    function handleVoltar(){
        navigation.goBack();
    }

    return (
        <Container>
            <Voltar onPress={handleVoltar}>
            <FontAwesome5 name='sign-out-alt' size={35} color="#163B39"/>
            </Voltar>

            <Logo source={logo}/>

            <Menu>
                <MenuContainer onPress={handleCadastrarPet}>
                <FontAwesome5 name='file-medical' size={70} color="#ff9000"/>
                <MenuTexto>Cadastrar Pet</MenuTexto>
                </MenuContainer>
                
                <MenuContainer onPress={handleAlimentacao}>
                <FontAwesome5 name='bookmark' size={70} color="#ff9000"/>
                <MenuTexto>Lembretes</MenuTexto>
                </MenuContainer>
                
                

            </Menu>

            <Menu>
            <MenuContainer onPress={handleListaPets}>
            <FontAwesome5 name='list-ul' size={70} color="#ff9000"/>
            <MenuTexto>Meus Pets</MenuTexto>
            </MenuContainer>

            </Menu>
        </Container>
    )
}

export default TelaPrincipal;