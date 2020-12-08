import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase';

import {View, ActivityIndicator, Alert} from 'react-native';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title, ErrorText, Image} from './styles';
import { useNavigation } from '@react-navigation/native';

interface UserData {
    email: string;
    password: string;
}

const CadastroUsuario: React.FC = () => {
    const navigation = useNavigation();

    async function handleCriarUsuario(user: UserData){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(usuarioLogado => {
                Alert.alert(
                    "Sua conta foi criada com sucesso!",
                    '',
                    [
                      { text: "OK" }
                    ]
                    );
                navigation.navigate('Login');
            }).catch(erro => {
                Alert.alert(
                    "Algo deu errado ao criar sua conta!",
                    "Favor verificar e tentar novamente.",
                    [
                      { text: "OK" }
                    ]
                    );
        })
    }

    function handleVoltarPagina(){
        navigation.goBack();
    }
    

    return (
        <Container>
            <Image source={logo}/>
            <View>
                <Title>Crie sua conta</Title>
            </View>

            <Formik
                initialValues={{email:'', password: ''}}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('Email é obrigatório').email('Precisa ser um email'),
                    password: Yup.string().required('Senha é obrigatória')
                })}
                onSubmit={values => handleCriarUsuario(values)}
            >
                {({values, handleChange, handleSubmit, errors, isSubmitting, handleBlur, touched}) => (
                    <>
                    <Input 
                    onBlur={handleBlur('email')}
                    name="email" 
                    icon="envelope" 
                    placeholder="E-mail" 
                    value={values.email} 
                    onChangeText={handleChange('email')}
                    />
                    {touched.email && <ErrorText >{errors.email}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('password')}
                    name="password" 
                    icon="lock" 
                    placeholder="Senha" 
                    value={values.password} 
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                    />
                    {touched.password && <ErrorText >{errors.password}</ErrorText>}
                    
                    {isSubmitting && <ActivityIndicator color='#237A79' />}
                    
                    {!isSubmitting && <Button onPress={() => handleSubmit()}>Criar conta</Button>}
                    
                    </>
                )}
            </Formik>

            <Button onPress={handleVoltarPagina}>Voltar</Button>

        </Container>
    )
}

export default CadastroUsuario;