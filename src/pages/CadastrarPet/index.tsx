import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {View, ActivityIndicator, Alert} from 'react-native';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {FontAwesome5} from '@expo/vector-icons';

import {Container, Title, ErrorText, Image, ContainerForm, ContentForm, Voltar} from './styles';
import { useNavigation } from '@react-navigation/native';

interface UserData {
    email: string;
    password: string;
}

const CadastrarPet: React.FC = () => {
    const navigation = useNavigation();

    async function handleLogon(user: UserData){
        await new Promise(resolve => setTimeout(resolve, 1000));
        if(user.email === 'teste@teste.com' && user.password === '1234'){
            navigation.navigate('TelaPrincipal')
        }else{
            Alert.alert(
                "Usuário / Senha Incorreto(s)!",
                "Favor verificar e tentar novamente.",
                [
                  { text: "OK" }
                ]
                );
        }
    }

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
                <Title>Cadastre seu pet</Title>
            </View>

            <ContainerForm>
            <Formik
                initialValues={{email:'', password: ''}}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('Email é obrigatório').email('Precisa ser um email'),
                    password: Yup.string().required('Senha é obrigatória')
                })}
                onSubmit={values => handleLogon(values)}
            >
                {({values, handleChange, handleSubmit, errors, isSubmitting, handleBlur, touched}) => (
                    <ContentForm>
                    <Input 
                    onBlur={handleBlur('nome_do_pet')}
                    name="nome_do_pet" 
                    icon="paw" 
                    placeholder="Nome do pet" 
                    value={values.nome_do_pet} 
                    onChangeText={handleChange('nome_do_pet')}
                    />
                    {touched.email && <ErrorText >{errors.email}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('especie')}
                    name="especie" 
                    icon="user-tag" 
                    placeholder="Espécie" 
                    value={values.especie} 
                    onChangeText={handleChange('especie')}
                    />
                    {touched.email && <ErrorText >{errors.email}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('raca')}
                    name="raca" 
                    icon="dog" 
                    placeholder="Raça" 
                    value={values.raca} 
                    onChangeText={handleChange('raca')}
                    />
                    {touched.email && <ErrorText >{errors.email}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('sexo')}
                    name="sexo" 
                    icon="venus-double" 
                    placeholder="Sexo (Macho ou Fêmea)" 
                    value={values.sexo} 
                    onChangeText={handleChange('sexo')}
                    />
                    {touched.email && <ErrorText >{errors.email}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('cor')}
                    name="cor" 
                    icon="tint" 
                    placeholder="Cor" 
                    value={values.cor} 
                    onChangeText={handleChange('cor')}
                    />
                    {touched.email && <ErrorText >{errors.email}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('dt_nascimento')}
                    name="dt_nascimento" 
                    icon="calendar-alt" 
                    placeholder="Data de nascimento" 
                    value={values.dt_nascimento} 
                    onChangeText={handleChange('dt_nascimento')}
                    />
                    {touched.email && <ErrorText >{errors.email}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('observacao')}
                    name="observacao" 
                    icon="exclamation" 
                    placeholder="Observações" 
                    value={values.observacao} 
                    onChangeText={handleChange('observacao')}
                    />
                    {touched.email && <ErrorText >{errors.email}</ErrorText>}

                    
                    {touched.password && <ErrorText >{errors.password}</ErrorText>}
                    
                    {isSubmitting && <ActivityIndicator color='#237A79' />}
                    
                    {!isSubmitting && <Button onPress={() => handleSubmit()}>Cadastrar</Button>}
                    
                    </ContentForm>
                )}
            </Formik>
            </ContainerForm>

        </Container>
    )
}

export default CadastrarPet;