import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase';
import 'firebase/firestore'; 

import {View, ActivityIndicator, Alert} from 'react-native';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {FontAwesome5} from '@expo/vector-icons';

import {Container, Title, ErrorText, Image, ContainerForm, ContentForm, Voltar} from './styles';
import { useNavigation } from '@react-navigation/native';

interface PetData {
    nome_do_pet:string; 
    especie: string; 
    raca: string; 
    sexo: string; 
    cor: string; 
    dt_nascimento: string; 
    observacao: string;
}

const CadastrarPet: React.FC = () => {
    const navigation = useNavigation();
    const db = firebase.firestore();

    async function handleCadastrarPet(pet: PetData){
        const id = new Date().getTime();
        const newPet = {
            nome_do_pet: pet.nome_do_pet,
            especie: pet.especie, 
            raca: pet.raca, 
            sexo: pet.sexo, 
            cor: pet.cor, 
            dt_nascimento: pet.dt_nascimento, 
            observacao: pet.observacao,
        };

        db.collection('pets').doc(firebase.auth().currentUser?.uid).get().then(resultado => {
            if(resultado.exists){
                db.collection('pets').doc(firebase.auth().currentUser?.uid).update({
                    lista: firebase.firestore.FieldValue.arrayUnion(newPet),
                }).then(() => {
                    Alert.alert(
                        "Seu pet foi cadastrado com sucesso!",
                        '',
                        [
                          { text: "OK" }
                        ]
                        );
                }).catch(() => {
                    Alert.alert(
                        "Erro ao cadastrar pet, por favor tente novamente!",
                        '',
                        [
                          { text: "OK" }
                        ]
                        );
                  });
            }else{
                db.collection('pets').doc(firebase.auth().currentUser?.uid).set({
                    lista: [
                        {
                            nome_do_pet: pet.nome_do_pet,
                            especie: pet.especie, 
                            raca: pet.raca, 
                            sexo: pet.sexo, 
                            cor: pet.cor, 
                            dt_nascimento: pet.dt_nascimento, 
                            observacao: pet.observacao,
                        }
                    ]
                    
                  }).then(() => {
                    Alert.alert(
                        "Seu pet foi cadastrado com sucesso!",
                        '',
                        [
                          { text: "OK" }
                        ]
                        );
                  }).catch(() => {
                    Alert.alert(
                        "Erro ao cadastrar pet, por favor tente novamente!",
                        '',
                        [
                          { text: "OK" }
                        ]
                        );
                  });
            }
        })

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
                initialValues={{
                    nome_do_pet:'', 
                    especie: '', 
                    raca: '', 
                    sexo: '', 
                    cor: '', 
                    dt_nascimento: '', 
                    observacao: '',
                }}
                validationSchema={Yup.object().shape({
                    nome_do_pet: Yup.string().required('É obrigatorio'), 
                    especie: Yup.string().required('É obrigatorio'), 
                    raca: Yup.string().required('É obrigatorio'), 
                    sexo: Yup.string().required('É obrigatorio'), 
                    cor: Yup.string().required('É obrigatorio'), 
                    dt_nascimento: Yup.string().required('É obrigatorio'), 
                    observacao: Yup.string().required('É obrigatorio'),
                })}
                onSubmit={values => handleCadastrarPet(values)}
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
                    {touched.nome_do_pet && <ErrorText >{errors.nome_do_pet}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('especie')}
                    name="especie" 
                    icon="user-tag" 
                    placeholder="Espécie" 
                    value={values.especie} 
                    onChangeText={handleChange('especie')}
                    />
                    {touched.especie && <ErrorText >{errors.especie}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('raca')}
                    name="raca" 
                    icon="dog" 
                    placeholder="Raça" 
                    value={values.raca} 
                    onChangeText={handleChange('raca')}
                    />
                    {touched.raca && <ErrorText >{errors.raca }</ErrorText>}

                    <Input 
                    onBlur={handleBlur('sexo')}
                    name="sexo" 
                    icon="venus-double" 
                    placeholder="Sexo (Macho ou Fêmea)" 
                    value={values.sexo} 
                    onChangeText={handleChange('sexo')}
                    />
                    {touched.sexo && <ErrorText >{errors.sexo}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('cor')}
                    name="cor" 
                    icon="tint" 
                    placeholder="Cor" 
                    value={values.cor} 
                    onChangeText={handleChange('cor')}
                    />
                    {touched.cor && <ErrorText >{errors.cor}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('dt_nascimento')}
                    name="dt_nascimento" 
                    icon="calendar-alt" 
                    placeholder="Data de nascimento" 
                    value={values.dt_nascimento} 
                    onChangeText={handleChange('dt_nascimento')}
                    />
                    {touched.dt_nascimento && <ErrorText >{errors.dt_nascimento}</ErrorText>}

                    <Input 
                    onBlur={handleBlur('observacao')}
                    name="observacao" 
                    icon="exclamation" 
                    placeholder="Observações" 
                    value={values.observacao} 
                    onChangeText={handleChange('observacao')}
                    />
                    {touched.observacao && <ErrorText >{errors.observacao}</ErrorText>}
                    
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