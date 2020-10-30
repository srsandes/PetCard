import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

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

const Login: React.FC = () => {
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
    

    return (
        <Container>
            <Image source={logo}/>
            <View>
                <Title>Faça seu logon</Title>
            </View>

            <Formik
                initialValues={{email:'', password: ''}}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('Email é obrigatório').email('Precisa ser um email'),
                    password: Yup.string().required('Senha é obrigatória')
                })}
                onSubmit={values => handleLogon(values)}
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
                    
                    {!isSubmitting && <Button onPress={() => handleSubmit()}>Entrar</Button>}
                    
                    </>
                )}
            </Formik>

        </Container>
    )
}

export default Login;